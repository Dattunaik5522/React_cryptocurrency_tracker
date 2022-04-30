import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = React.useState("");
  const handler = (e) => {
    setSearch(e.target.value);
  };
  React.useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((res) => console.log(res.data.coins));
  });

  return (
    <div className="header">
      <input
        value={search}
        onChange={handler}
        type="text"
        placeholder="search here"
      />
    </div>
  );
};

export default Home;
