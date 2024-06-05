"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <div className="content-center">
          <ContactForm />
          {/* <ApplicationForm /> */}
        </div>
      </Container>
      <Footer />
    </>
  );
}
