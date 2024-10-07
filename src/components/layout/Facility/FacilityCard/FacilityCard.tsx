const FacilityCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold">
                        Tennis Court WestView Night
                    </h2>
                    <p className="text-gray-600 mb-2">
                        Outdoor tennis westview court with synthetic surface.
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                        <p>Location: 456 Sports Ave, Springfield WestView</p>
                        <p>Price per hour: $30</p>
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
