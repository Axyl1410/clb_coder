import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/a">No page</Link>
    </>
  );
}

export default Home;
