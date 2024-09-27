import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div>No page</div>
      <Link to="/">Home</Link>
    </>
  );
}

export default NoPage;
