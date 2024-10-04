import React, { useState, useEffect } from "react";

// import Men from "../men/Men";
// import AllProduct from "../allProduct/AllProduct";
// import Women from "./../women/Women";
// import Jewelery from "./../jewelery/Jewelery";
// import Electronics from "./../electronics/Electronics";

function FetchData() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // const men = data.filter((item) => item.category === "men's clothing");
  // const women = data.filter((item) => item.category === "women's clothing");
  // const jewelery = data.filter((item) => item.category === "jewelery");
  // const electronics = data.filter((item) => item.category === "electronics");

  return (
    <div>
      {/* <AllProduct data={data} />
      <Men data={men} />
      <Women data={women} />
      <Jewelery data={jewelery} />
      <Electronics data={electronics} /> */}
    </div>
  );
}

export default FetchData;
