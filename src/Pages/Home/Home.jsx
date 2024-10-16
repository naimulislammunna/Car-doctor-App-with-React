
import AboutUs from "../AboutUS/AboutUs";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Hero from "../Hero/Hero";
import ServiceArea from "../Services/ServiceArea";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServiceArea></ServiceArea>
            <AboutUs></AboutUs>
            <Contact></Contact>
            <Feature></Feature>
        </div>
    );
};

export default Home;