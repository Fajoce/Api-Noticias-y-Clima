import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import { API_BASE_URL, API_KEY } from '../Config';

const CitySelector = () => {
  const [city, setCity] = useState('');
  const [results, setResults] = useState(null);
  const onSearch = () => {
    fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        {/* xs={4} takes the one third  of the page*/}
        <Col xs={4} className="text-center container">
          <FormControl 
            placeholder="Enter city"
            // update city value with the user's input
            onChange={(event) => setCity(event.target.value)}
            // value will be the currently selected city            
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
<br></br>
      <Row>
        <Col>
          {/* event handler for button click */}
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;