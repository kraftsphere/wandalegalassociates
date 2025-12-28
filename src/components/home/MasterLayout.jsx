import ClientPrivileges from "./ClientPrivileges";
import ContactUsHome from "./ContactUsHome";
import HomeAbout from "./HomeAbout";
import InvestToday from "./InvestToday";
import HomeTestimonial from "./testimonial/HomeTestimonial";
import VideoBanner from "./VideoBanner";
import WhyUs from "./WhyUs";

const MasterLayout = () => {
  return (
    <>
      <VideoBanner />
      <HomeAbout />
      <ClientPrivileges />
      <WhyUs />
      <InvestToday />
      <HomeTestimonial />
      <ContactUsHome />
    </>
  );
};

export default MasterLayout;
