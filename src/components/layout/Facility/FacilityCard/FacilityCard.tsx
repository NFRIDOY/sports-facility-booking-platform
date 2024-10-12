import { Link } from "react-router-dom";
import { IFacility } from "./../../../../types/facility.interface";
const FacilityCard = ({ facitity }: { facitity: IFacility }) => {
    return (
        <>
            <Link to={`/facility/${facitity?._id}`} className="mx-auto my-10 card w-96 h-80 bg-base-100 shadow-xl m-4 border-t-2 border-t-sky-500 hover:border-t-8">
                <div className="card-body ">
                    <div className="flex-grow">
                        <h2 className="card-title text-xl font-bold">
                            {facitity.name}
                        </h2>
                        <div className="text-sm text-gray-500 mb-4">
                            <p className="text-2xl primary-text font-bold">
                                Price Per Hour: ${facitity.pricePerHour}
                            </p>
                        </div>
                        <p className="my-2">Location: {facitity.location}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn primary-btn">Book Now</button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default FacilityCard;
