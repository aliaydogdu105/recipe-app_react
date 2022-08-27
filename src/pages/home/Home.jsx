import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../login/Login.styled";

const Home = () => {
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Enter your meal");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
