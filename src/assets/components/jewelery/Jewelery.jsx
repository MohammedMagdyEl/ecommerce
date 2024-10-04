import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";

function Jewelery() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const jewelery = data.filter(item => item.category === "jewelery")


  return (
    <>
      <Card data={jewelery}/>
    </>
  );
}
export default Jewelery;
