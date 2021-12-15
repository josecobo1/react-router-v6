import classes from "./Details.module.css";
import { Link, useParams } from "react-router-dom";

const Details = ({ hotels }) => {
  const params = useParams();
  const hotel = hotels[params.hotelId];

  return (
    <div className={classes.container}>
      <h1>Hotel: {hotel.name}</h1>
      <h2>Rooms: {hotel.rooms}</h2>
      <h3>Rating: {hotel.rating}/10</h3>
      <Link to="/hotels">
        <button className={classes.container__save}>Hotels</button>
      </Link>
    </div>
  );
};

export default Details;
