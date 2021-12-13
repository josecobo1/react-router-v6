import classes from "./Hotels.module.css";

const Hotels = ({ hotels }) => {
  return (
    <div className={classes.container}>
      {hotels.map((hotel, key) => {
        return (
          <div key={key} className={classes.element}>
            <h1>Hotel: {hotel.name}</h1>
            <h2>Rooms: {hotel.rooms}</h2>
            <h3>Rating: {hotel.rating}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Hotels;
