import { Link } from "react-router";
import type { Route } from "./+types/trending";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trending Concert Venues - Max Burgers" },
    {
      name: "description",
      content: "Discover the hottest concert venues featuring Max Burgers",
    },
  ];
}

export default function TrendingConcerts() {
  const trendingVenues = [
    {
      id: 1,
      name: "Red Rocks Amphitheatre",
      city: "denver",
      location: "Morrison, CO",
      popularity: 98,
      totalShows: 15,
      averageRating: 4.9,
      featuredArtist: "Coldplay",
      nextShow: "2025-09-22",
      image: "/images/venues/red-rocks.jpg",
      tags: ["Outdoor", "Scenic", "Historic"],
      whyTrending:
        "Incredible natural acoustics and breathtaking mountain views",
    },
    {
      id: 2,
      name: "Madison Square Garden",
      city: "new-york",
      location: "New York, NY",
      popularity: 95,
      totalShows: 8,
      averageRating: 4.8,
      featuredArtist: "Taylor Swift",
      nextShow: "2025-08-15",
      image: "/images/venues/msg.jpg",
      tags: ["Iconic", "Central", "Historic"],
      whyTrending:
        "The world's most famous arena hosting legendary performances",
    },
    {
      id: 3,
      name: "Crypto.com Arena",
      city: "los-angeles",
      location: "Los Angeles, CA",
      popularity: 92,
      totalShows: 12,
      averageRating: 4.7,
      featuredArtist: "Bad Bunny",
      nextShow: "2025-08-18",
      image: "/images/venues/crypto.jpg",
      tags: ["Modern", "Downtown", "Premium"],
      whyTrending:
        "State-of-the-art facilities in the heart of LA entertainment district",
    },
    {
      id: 4,
      name: "The Gorge Amphitheatre",
      city: "george",
      location: "George, WA",
      popularity: 89,
      totalShows: 10,
      averageRating: 4.9,
      featuredArtist: "Dave Matthews Band",
      nextShow: "2025-09-01",
      image: "/images/venues/gorge.jpg",
      tags: ["Outdoor", "River Views", "Festival"],
      whyTrending:
        "Stunning Columbia River views and epic summer festival lineup",
    },
    {
      id: 5,
      name: "United Center",
      city: "chicago",
      location: "Chicago, IL",
      popularity: 87,
      totalShows: 6,
      averageRating: 4.6,
      featuredArtist: "Kendrick Lamar",
      nextShow: "2025-08-25",
      image: "/images/venues/united.jpg",
      tags: ["Sports", "Central", "Large"],
      whyTrending: "Home to Bulls and Blackhawks, now hosting major music acts",
    },
    {
      id: 6,
      name: "Austin City Limits Live",
      city: "austin",
      location: "Austin, TX",
      popularity: 85,
      totalShows: 18,
      averageRating: 4.5,
      featuredArtist: "Local Natives",
      nextShow: "2025-08-30",
      image: "/images/venues/acl.jpg",
      tags: ["Live Music Capital", "Intimate", "Local"],
      whyTrending:
        "Heart of Austin's legendary music scene with intimate performances",
    },
  ];

  return (
    <div className="trending-page">
      <div className="hero-section">
        <h1>🔥 Trending Concert Venues</h1>
        <p>Discover the hottest venues where music meets amazing burgers</p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Active Venues</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Shows This Month</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.8★</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </div>

      <div className="trending-filters">
        <h2>What Makes These Venues Trending?</h2>
        <div className="filter-tags">
          <span className="filter-tag active">🎵 Most Shows</span>
          <span className="filter-tag">⭐ Highest Rated</span>
          <span className="filter-tag">🔥 Most Popular</span>
          <span className="filter-tag">🎪 Festival Season</span>
        </div>
      </div>

      <div className="trending-venues">
        {trendingVenues.map((venue, index) => (
          <div key={venue.id} className="trending-venue-card">
            <div className="venue-rank">
              <span className="rank-number">#{index + 1}</span>
              <div className="popularity-bar">
                <div
                  className="popularity-fill"
                  style={{ width: `${venue.popularity}%` }}
                ></div>
              </div>
              <span className="popularity-score">{venue.popularity}% hot</span>
            </div>

            <div className="venue-image">
              <img src={venue.image} alt={venue.name} />
              <div className="venue-overlay">
                <div className="venue-tags">
                  {venue.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="venue-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="venue-content">
              <div className="venue-header">
                <h3>{venue.name}</h3>
                <div className="venue-location">📍 {venue.location}</div>
                <div className="venue-rating">
                  ⭐ {venue.averageRating} ({venue.totalShows} shows)
                </div>
              </div>

              <div className="trending-reason">
                <h4>Why It's Trending</h4>
                <p>{venue.whyTrending}</p>
              </div>

              <div className="featured-show">
                <h4>Featured Show</h4>
                <div className="show-details">
                  <span className="artist">{venue.featuredArtist}</span>
                  <span className="date">
                    {new Date(venue.nextShow).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <div className="venue-actions">
                <Link to={`/concerts/${venue.city}`} className="primary-button">
                  View Venue Details
                </Link>
                <button className="secondary-button">Pre-Order Food</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trending-footer">
        <h2>Want to see your venue trending?</h2>
        <p>
          Contact us about bringing Max Burgers to your favorite concert venue!
        </p>
        <button className="cta-button">Partner With Us</button>
      </div>
    </div>
  );
}
