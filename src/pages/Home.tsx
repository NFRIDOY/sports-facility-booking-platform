import Banner from "../components/layout/Banners/Banner";
import CustomerTestimonial from "../components/layout/Sliders/CustomerTestimonial";

export default function Home() {

    // import { Pagination } from 'swiper/modules';

    // if (isLoading) {
    //     return <Loading />
    // }
    // console.log("data => ", facitityData.data);
    return (
        <div>
            <Banner />
            {/* <section>
                {facitityData?.data.map((facitity : IFacility) => (
                    <>
                        <FacilityCard facitity={facitity}/>
                    </>
                ))}
            </section> */}
            {/* <div>
                {customerTestimonials.map(
                    (customerTestimonial: TCustomerTestimonial) => (
                        <>
                            <div
                                key={customerTestimonial.id}
                                className="carousel-item w-full flex justify-center p-4">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {customerTestimonial.name}
                                        </h2>
                                        <p>{customerTestimonial.body}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                )}
            </div> */}
            <CustomerTestimonial />
        </div>
    );
}
