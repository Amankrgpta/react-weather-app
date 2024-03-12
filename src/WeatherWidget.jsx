import React, { useState } from 'react';

const WeatherWidget = () => {
  const [city, setCity] = useState('delhi');
  const [zipcode, setZipcode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [temperature, setTemperature] = useState(null);

  const searchWeather = () => {
    if ((city && zipcode) || (!city && !zipcode)) {
      setErrorMessage('slect city or zip not both.');
      return;
    }

    setErrorMessage('');

    const randomTemperature = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
    setTemperature(randomTemperature);

    const newSearch = {
      city: city || 'None',
      zipcode: zipcode || 'None',
      temperature,
    };

    setSearchHistory([newSearch, ...searchHistory.slice(0, 2)]);
  };

  const resetSearch = () => {
    setCity('delhi');
    setZipcode('');
    setTemperature(null);
    setErrorMessage('');
  };

  return (
    <div id="weather-widget">
      <h2>Normal weather app using react</h2>

      <label htmlFor="city-dropdown">Select City:</label>
      <select id="city-dropdown" value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
        <option value="chennai">Chenai</option>
        <option value="kolkata">Kolkata</option>
        <option value="none">None</option>
      </select>

      <label htmlFor="zipcode-input">Enter Zip Code:</label>
      <input
        type="text"
        id="zipcode-input"
        placeholder="Zip Code"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />

      <button onClick={searchWeather}>Search</button>

      {errorMessage && <div id="error-message">{errorMessage}</div>}

      <div className="search-history">
        <h3>Recent Searches</h3>
        {searchHistory.map((search, index) => (
          <div key={index} className="search-item">
            <strong>City:</strong> {search.city}, <strong>Zip Code:</strong> {search.zipcode}, <strong>Temperature:</strong> {search.temperature}°C
          </div>
        ))}
      </div>

      <button onClick={resetSearch}>Reset</button>
    </div>
  );
};

export default WeatherWidget;
