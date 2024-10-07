import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { customerTestimonials } from "../../../utils/StaticData/customerTestimonials";
import { TCustomerTestimonial } from "../../../types/customer.interface";

const CustomerTestimonial = () => {
    return (
        <div className=" my-2">
            <h1 className="text-5xl mb-8 text-center font-bold primary-text">Our Happy Customers</h1>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false, // Continue autoplay even after interaction
                }}
                speed={1500}
                modules={[Autoplay]}
                className="mySwiper">
                {customerTestimonials.map(
                    (customerTestimonial: TCustomerTestimonial) => (
                        <SwiperSlide>
                            <div
                                key={customerTestimonial.id}
                                className="carousel-item h-44 w-[95%] flex justify-center p-1 primary-border">
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {customerTestimonial.name}
                                        </h2>
                                        <p>{customerTestimonial.body}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    );
};

export default CustomerTestimonial;
