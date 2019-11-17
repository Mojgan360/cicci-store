import React from "react";
import Faced from "../components/Faced";
import Info from "../components/AboutPage/info.js";
import aboutPage from "../images/aboutPage.jpg";

export default function AboutPage() {
  return (
    <>
      <Faced img={aboutPage}></Faced>
      <Info></Info>
    </>
  );
}
