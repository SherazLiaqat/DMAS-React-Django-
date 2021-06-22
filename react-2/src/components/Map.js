import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import fetchCountries from "../components/FetchCountries"



const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  });
  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <FormControl >
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {countries}
      {/* {countries.map((country, i) => <option key={i} value={country}>{country}</option>)} */}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;