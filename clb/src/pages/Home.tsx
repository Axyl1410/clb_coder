import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-full">Home</div>
      <Link to="/a">No page</Link>
    </>
  );
}
