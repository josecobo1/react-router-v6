import { Link } from "react-router-dom";
import classes from "./Hotels.module.css";

const Hotels = ({ hotels }) => {
  return (
    <div className={classes.container}>
      {hotels.map((hotel, key) => {
        return (
          <Link to={`/hotels/${key}`} style={{textDecoration: 'none', color: 'black'}}>
            <div key={key} className={classes.element}>
              <h1>{hotel.name}</h1>
              <h2>Rooms: {hotel.rooms}</h2>
              <h3>Rating: {hotel.rating}/10</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Hotels;
