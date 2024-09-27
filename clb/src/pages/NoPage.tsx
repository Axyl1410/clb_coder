import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <div>No page</div>
      <Link to="/">Home</Link>
    </>
  );
}
