import React from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
import Faced from "../components/Faced";
export default function Default() {
  return (
    <>
      <Faced img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase" style={{ letterSpacing: " 0.3rem" }}>
          page not found
        </h2>
        <Link to="/" className="main-link" style={{ marginTop: "2.5rem" }}>
          return home
        </Link>
      </Faced>
    </>
  );
}
