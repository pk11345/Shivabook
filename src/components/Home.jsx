import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* SEO Title */}
        <title>ShivaBook: Ultimate Betting Platform | Online Sports Betting</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="ShivaBook offers the best online betting platform with live sports betting, top casino games, and high payout odds. Bet with confidence!"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="online betting, sports betting, live betting, casino games, betting odds, free betting tips, high payout betting platform, football betting"
        />

        {/* Open Graph Tags (For Social Media Sharing) */}
        <meta property="og:title" content="ShivaBook: Ultimate Betting Platform" />
        <meta
          property="og:description"
          content="ShivaBook offers top-notch online betting services with a focus on sports, casino games, and secure transactions."
        />
        <meta property="og:image" content="url-to-image.jpg" />
        <meta property="og:url" content="https://bookshiva.com" />
        <meta property="og:type" content="website" />

     
      </Helmet>

      {/* Your page content */}
      {/* <h1>Welcome to ShivaBook</h1>
      <p>Experience the best betting platform with secure and fast payouts!</p> */}
    </div>
  );
};

export default Home;
