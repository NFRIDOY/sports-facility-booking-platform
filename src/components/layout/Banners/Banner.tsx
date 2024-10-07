import banner1 from "../../../assets/images/piyush-bansal-WvlFN57CyL8-unsplash.jpg";

export default function Banner() {
    return (
        <div className="relative">
            <div>
                <img
                    src={banner1}
                    alt="Banner1"
                    className="w-full md:h-[300px] lg:h-[600px] brightness-75"
                />
            </div>
            <h1 className="absolute top-[18vh] left-[13vh] md:left-[40vh] lg:top-[50vh] lg:left-[59vh] ">
                <div className="text-4xl lg:text-8xl text-white flex flex-col justify-center items-center gap-y-8 border-0 ">
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
