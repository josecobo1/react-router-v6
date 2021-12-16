import { useState } from "react";
import { Route, Routes } from "react-router";
import classes from "./app.module.css";
import Nav from "./components/Nav";
import Details from "./pages/Details";
import Form from "./pages/Form";
import Hotels from "./pages/Hotels";

const App = () => {
  const hotelsArray = [
    {
      name: "Hotel Barcelona",
      rooms: 5,
      rating: 8,
    },
    {
      name: "Hotel Paris",
      rooms: 41,
      rating: 9,
    },
    {
      name: "Hotel Munich",
      rooms: 14,
      rating: 10,
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
          <Route path="/hotels">
            <Route path="" element={<Hotels hotels={hotels} />} />
            <Route path=":hotelId" element={<Details hotels={hotels} />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/new" element={<Form onSubmit={newHotelHandler} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
