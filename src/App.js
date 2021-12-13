import { useState } from "react";
import { Route, Routes } from "react-router";
import classes from "./app.module.css";
import Nav from "./components/Nav";
import Form from "./pages/Form";
import Hotels from "./pages/Hotels";

const App = () => {
  const hotelsArray = [
    {
      name: "Hotel Barcelona",
      rooms: 5,
      rating: "8/10",
    },
    {
      name: "Hotel Paris",
      rooms: 41,
      rating: "9/10",
    },
    {
      name: "Hotel Munich",
      rooms: 14,
      rating: 10 / 10,
    },
  ];

  const [hotels, setHotels] = useState(hotelsArray);

  const newHotelHandler = (hotel) => {
    setHotels((prevState) => [...prevState, hotel]);
  };

  return (
    <>
      <Nav />
      <div className={classes.container}>
        <Routes>
          <Route path="/hotels" element={<Hotels hotels={hotels} />} />
        </Routes>
        <Routes>
          <Route path="/new" element={<Form onSubmit={newHotelHandler} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
