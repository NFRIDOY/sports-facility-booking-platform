import { Link } from "react-router-dom";
import { IFacility } from "./../../../../types/facility.interface";
const FacilityCard = ({ facitity }: { facitity: IFacility }) => {
    return (
        <div>
            <div className="mx-auto my-10 card w-96 h-96 bg-base-100 shadow-xl m-4 border-t-0 border-t-sky-500 hover:border-t-8">
                <div className="card-body">
                    <Link to={`/`}>
                        <h2 className="card-title text-xl font-bold">
                            {facitity.name}
                        </h2>
                        <p className="text-gray-600 mb-2">
                            {facitity.description}
                        </p>
                        <div className="text-sm text-gray-500 mb-4">
                            <p className="text-2xl">
                                Price per hour: ${facitity.pricePerHour}
                            </p>
                        </div>
                        <p className="my-2">Location: {facitity.location}</p>
                    </Link>
                    <div className="card-actions justify-end">
                        <button className="btn primary-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;
