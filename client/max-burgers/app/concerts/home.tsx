import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Concert Venues - Max Burgers" },
    {
      name: "description",
      content: "Find Max Burgers locations at concert venues near you",
    },
  ];
}

export default function ConcertsHome() {
  const featuredVenues = [
    {
      id: 1,
      name: "Madison Square Garden",
      city: "new-york",
      location: "New York, NY",
      upcomingShows: 8,
      image: "/images/venues/msg.jpg",
    },
    {
      id: 2,
      name: "Staples Center",
      city: "los-angeles",
      location: "Los Angeles, CA",
      upcomingShows: 12,
      image: "/images/venues/staples.jpg",
    },
    {
      id: 3,
      name: "United Center",
      city: "chicago",
      location: "Chicago, IL",
      upcomingShows: 6,
      image: "/images/venues/united.jpg",
    },
    {
      id: 4,
      name: "Red Rocks Amphitheatre",
      city: "denver",
      location: "Morrison, CO",
      upcomingShows: 15,
      image: "/images/venues/red-rocks.jpg",
    },
  ];

  return (
    <div className="concerts-home">
      <div className="hero-section">
        <h1>Max Burgers at Concert Venues</h1>
        <p>
          Fuel your concert experience with our gourmet burgers at venues
          nationwide
        </p>
        <Link to="/concerts/trending" className="cta-button">
          View Trending Venues
        </Link>
      </div>

      <div className="featured-venues">
        <h2>Featured Venues</h2>
        <div className="venues-grid">
          {featuredVenues.map((venue) => (
            <Link
              key={venue.id}
              to={`/concerts/${venue.city}`}
              className="venue-card"
            >
              <div className="venue-image">
                <img src={venue.image} alt={venue.name} />
                <div className="venue-overlay">
                  <h3>{venue.name}</h3>
                  <p>{venue.location}</p>
                </div>
              </div>
              <div className="venue-info">
                <p className="upcoming-shows">
                  {venue.upcomingShows} upcoming shows
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h2>Why Choose Max Burgers at Concerts?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>🎵 Pre-Show Fuel</h3>
            <p>Get energized with our premium burgers before the show starts</p>
          </div>
          <div className="benefit">
            <h3>🕐 Quick Service</h3>
            <p>Fast ordering and pickup so you don't miss a beat</p>
          </div>
          <div className="benefit">
            <h3>🍔 Concert Specials</h3>
            <p>
              Exclusive menu items and deals available only at venue locations
            </p>
          </div>
          <div className="benefit">
            <h3>📱 Mobile Ordering</h3>
            <p>Order ahead through our app and skip the lines</p>
          </div>
        </div>
      </div>
    </div>
  );
}
