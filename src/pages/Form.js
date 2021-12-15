import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.css";

const Form = ({ onSubmit }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rooms, setRooms] = useState(0);
  const [rating, setRating] = useState(0);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const roomsHandler = (event) => {
    setRooms(event.target.value);
  };

  const ratingHandler = (event) => {
    setRating(event.target.value);
  };

  const onSubmitHandler = () => {
      onSubmit({name: name, rooms: rooms, rating: rating});
      // After saving the hotel redirect the user to the hotels list
      navigate('/hotels')
  }

  return (
    <div className={classes.container}>
      <div className={classes.container__field}>
        <label>Hotel Name</label>
        <input onChange={nameHandler} type="text" />
      </div>
      <div className={classes.container__field}>
        <label>Rooms</label>
        <input onChange={roomsHandler} type="number" min="1" max="99" />
      </div>
      <div className={classes.container__field}>
        <label>Rating</label>
        <input onChange={ratingHandler} type="number" min="1" max="10" />
      </div>
      <button onClick={onSubmitHandler} className={classes.container__save}>Save</button>
    </div>
  );
};

export default Form;
