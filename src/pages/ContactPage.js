import React from "react";
import contactPage from "../images/03-contactPage.jpg";
import Faced from "../components/Faced";
import ContactInfo from "../components/ContactPage/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Faced img={contactPage}></Faced>
      <ContactInfo />
    </>
  );
}
