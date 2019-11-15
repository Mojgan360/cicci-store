import React from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
import Faced from "../components/Faced";
export default function Default() {
  return (
    <>
      <Faced img={defaultBcg} max="true">
        <h2 className="text-uppercase" style={{ "letter-spacing": " 0.5rem" }}>
          {" "}
          page not found{" "}
        </h2>
        <Link to="/" className="main-link" style={{ " margin-top": "2.5rem" }}>
          return home
        </Link>
      </Faced>
    </>
  );
}
