import Banner from "../components/layout/Banners/Banner";
import FacititySection from "../components/layout/Facility/FacititySection";
import CustomerTestimonial from "../components/layout/Sliders/CustomerTestimonial";

export default function Home() {
    return (
        <div>
            <Banner />
            <FacititySection />
            <CustomerTestimonial />
            {/* <TimeInput /> */}
        </div>
    );
}
