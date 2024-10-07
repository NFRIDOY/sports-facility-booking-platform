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
                <img
                    src={banner1}
                    alt="Banner1"
                    className="w-full h-[600px] brightness-75"
                />
            </div>
            <h1 className="absolute top-[50vh] left-[59vh] ">
                <div className="text-8xl text-white flex flex-col justify-center items-center gap-y-8 border-0 ">
                    <h2>Feel Your Sports</h2>
                    <div className="flex justify-end">
                        <button className="btn primary-btn">Book Now!</button>
                    </div>
                    {/* <h2>You Naver Wanna Miss The Match You Care</h2>
                <h2>Book Your Ticket Now...</h2> */}
                </div>
            </h1>
        </div>
    );
}
