import { useParams, Link } from "react-router";
import type { Route } from "./+types/city";

export function meta({ params }: Route.MetaArgs) {
  const cityName =
    params.city?.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()) ||
    "City";
  return [
    { title: `${cityName} Concert Venues - Max Burgers` },
    {
      name: "description",
      content: `Max Burgers locations at concert venues in ${cityName}`,
    },
  ];
}

export default function ConcertCity() {
  const { city } = useParams();

  // Mock data - in a real app this would come from an API based on the city param
  const getCityData = (citySlug: string) => {
    const cities = {
      "new-york": {
        name: "New York",
        venues: [
          {
            id: 1,
            name: "Madison Square Garden",
            address: "4 Pennsylvania Plaza, New York, NY 10001",
            phone: "(212) 465-6741",
            hours: "Opens 2 hours before each event",
            upcomingShows: [
              { artist: "Taylor Swift", date: "2025-08-15", time: "8:00 PM" },
              { artist: "Ed Sheeran", date: "2025-08-22", time: "7:30 PM" },
              { artist: "Billie Eilish", date: "2025-09-05", time: "8:00 PM" },
            ],
          },
          {
            id: 2,
            name: "Barclays Center",
            address: "620 Atlantic Ave, Brooklyn, NY 11217",
            phone: "(917) 618-6100",
            hours: "Opens 2 hours before each event",
            upcomingShows: [
              { artist: "Drake", date: "2025-08-28", time: "8:00 PM" },
              { artist: "The Weeknd", date: "2025-09-12", time: "7:30 PM" },
            ],
          },
        ],
      },
      "los-angeles": {
        name: "Los Angeles",
        venues: [
          {
            id: 1,
            name: "Crypto.com Arena",
            address: "1111 S Figueroa St, Los Angeles, CA 90015",
            phone: "(213) 742-7340",
            hours: "Opens 2 hours before each event",
            upcomingShows: [
              { artist: "Bad Bunny", date: "2025-08-18", time: "8:00 PM" },
              { artist: "Dua Lipa", date: "2025-09-02", time: "7:30 PM" },
            ],
          },
        ],
      },
      chicago: {
        name: "Chicago",
        venues: [
          {
            id: 1,
            name: "United Center",
            address: "1901 W Madison St, Chicago, IL 60612",
            phone: "(312) 455-4500",
            hours: "Opens 2 hours before each event",
            upcomingShows: [
              { artist: "Kendrick Lamar", date: "2025-08-25", time: "8:00 PM" },
              { artist: "Ariana Grande", date: "2025-09-08", time: "7:30 PM" },
            ],
          },
        ],
      },
      denver: {
        name: "Denver",
        venues: [
          {
            id: 1,
            name: "Red Rocks Amphitheatre",
            address: "18300 W Alameda Pkwy, Morrison, CO 80465",
            phone: "(720) 865-2494",
            hours: "Opens 2 hours before each event",
            upcomingShows: [
              { artist: "John Mayer", date: "2025-08-20", time: "7:00 PM" },
              {
                artist: "Imagine Dragons",
                date: "2025-09-15",
                time: "7:30 PM",
              },
              { artist: "Coldplay", date: "2025-09-22", time: "7:00 PM" },
            ],
          },
        ],
      },
    };

    return (
      cities[citySlug as keyof typeof cities] || {
        name:
          citySlug
            ?.replace("-", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()) || "Unknown City",
        venues: [],
      }
    );
  };

  const cityData = getCityData(city || "");

  if (!cityData.venues.length) {
    return (
      <div className="city-page">
        <div className="city-header">
          <h1>{cityData.name} Concert Venues</h1>
          <p>Max Burgers locations coming soon to {cityData.name}!</p>
        </div>

        <div className="coming-soon">
          <h2>Stay Tuned!</h2>
          <p>
            We're working on bringing Max Burgers to concert venues in{" "}
            {cityData.name}. Check back soon for updates!
          </p>
          <Link to="/concerts" className="back-link">
            ← Back to All Venues
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="city-page">
      <div className="city-header">
        <h1>{cityData.name} Concert Venues</h1>
        <p>Enjoy Max Burgers at these amazing {cityData.name} venues</p>
        <Link to="/concerts" className="back-link">
          ← Back to All Venues
        </Link>
      </div>

      <div className="venues-list">
        {cityData.venues.map((venue) => (
          <div key={venue.id} className="venue-detail-card">
            <div className="venue-header">
              <h2>{venue.name}</h2>
              <div className="venue-contact">
                <p className="address">📍 {venue.address}</p>
                <p className="phone">📞 {venue.phone}</p>
                <p className="hours">🕐 {venue.hours}</p>
              </div>
            </div>

            <div className="upcoming-shows">
              <h3>Upcoming Shows</h3>
              {venue.upcomingShows.length > 0 ? (
                <div className="shows-list">
                  {venue.upcomingShows.map((show, index) => (
                    <div key={index} className="show-item">
                      <div className="show-info">
                        <h4>{show.artist}</h4>
                        <p className="show-datetime">
                          {new Date(show.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}{" "}
                          at {show.time}
                        </p>
                      </div>
                      <button className="order-button">
                        Pre-Order for Show
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No upcoming shows scheduled</p>
              )}
            </div>

            <div className="venue-actions">
              <button className="primary-button">View Menu</button>
              <button className="secondary-button">Get Directions</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
