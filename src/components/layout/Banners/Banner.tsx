import banner1 from "../../../assets/images/piyush-bansal-WvlFN57CyL8-unsplash.jpg";

export default function Banner() {
    return (
        <div className="relative">
            {/* <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper> */}
            <div>
                <img src={banner1} alt="Banner1" className="w-full h-[600px]" />
            </div>
            <h1 className="absolute top-0 text-8xl text-white">
                <h2>Cricket Fields at Your Fingertips</h2>
                <button className="btn primary-btn">Book Now!</button>
                {/* <h2>You Naver Wanna Miss The Match You Care</h2>
                <h2>Book Your Ticket Now...</h2> */}
            </h1>
        </div>
    );
}
