import { IFacility } from "./../../../../types/facility.interface";
const FacilityCard = ({ facitity }: { facitity: IFacility }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        {facitity.name}
                    </h2>
                    <p className="text-gray-600 mb-2">{facitity.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                        <p>Location: {facitity.location}</p>
                        <p>Price per hour: ${facitity.pricePerHour}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn primary-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;
