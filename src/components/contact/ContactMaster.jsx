import React from "react";
import Banner from "../ui/reusable/banner/Banner";
import DetailAndForm from "./DetailAndForm";
import ContactMap from "./ContactMap";

const ContactMaster = () => {
  return (
    <>
      <Banner
        title='Contact Us'
        imageUrl='https://img.freepik.com/free-photo/close-up-person-working-call-center_23-2149288225.jpg'
        subtitle='Have questions? We’re here to help - reach out!'
        className='bg-bottom-0 bg-cover bg-bottom-0 bg-no-repeat'
      />
      <DetailAndForm />
      <ContactMap />
    </>
  );
};

export default ContactMaster;
