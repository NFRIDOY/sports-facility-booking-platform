import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/ui/Loadings/Loading";
import { SuccessAlert } from "../components/ui/Alerts/SuccessAlert";
import { ErrorAlert } from "../components/ui/Alerts/ErrorAlert";
import {
    useBookByFacilityIdMutation,
    useGetFacilityByIdQuery,
} from "../redux/api/api";
import { useAppSelector } from "../redux/hooks";

const BookingConfirmation = () => {
    const { id } = useParams<{ id: string }>();
    console.log("Facility selected: ", id);
    const navigate = useNavigate();

    const { currentUser } = useAppSelector((state) => state.user);

    const {
        isError,
        isLoading,
        data: FacilityData,
    } = useGetFacilityByIdQuery(id);
    const [
        confirmBooking,
        { isLoading: isConfirming },
    ] = useBookByFacilityIdMutation();

    useEffect(() => {
        if (isError) {
            ErrorAlert("Failed to fetch booking details. Please try again.");
        }
    }, [isError]);

    const handleConfirmBooking = async () => {
        if (id) {
            try {
                await confirmBooking({ id });
                await SuccessAlert("Booking confirmed successfully!");
                navigate("/bookings");
            } catch (error) {
                ErrorAlert("Failed to confirm the booking. Please try again.");
                console.log(error);
            }
        }
    };

    if (isLoading || isConfirming) {
        return <Loading />;
    }

    // if (isError || isConfirmError || !FacilityData) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <p className="text-red-500">An error occurred while fetching booking details. Please try again.</p>
    //         </div>
    //     );
    // }
    console.log(FacilityData.data);

    return (
        <div className="flex justify-center items-center h-screen bg-green-100">
            <div className="bg-white shadow-md rounded-md p-8 w-1/2">
                <h1 className="text-xl font-bold mb-4">Confirm Your Booking</h1>
                <p className="mb-2">
                    <strong>User:</strong> {currentUser?.name}
                </p>
                <p className="mb-2">
                    {/* <strong>Facility:</strong> {booking.facility.name} */}
                </p>
                <p className="mb-2">
                    <strong>Date:</strong>{" "}
                    <input type="date" className="input input-bordered" />
                </p>
                <p className="mb-2">
                    <strong>Time:</strong>{" "}
                    <input type="time" className="input input-bordered" /> -{" "}
                    <input type="time" className="input input-bordered" />
                </p>
                <p className="mb-2">
                    <strong>Facility:</strong> {FacilityData.data.name}
                </p>
                <p className="mb-4">
                    <strong>Price Per Hour:</strong> ${FacilityData.data.pricePerHour}
                </p>

                <button
                    onClick={handleConfirmBooking}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mb-2">
                    Confirm Booking
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default BookingConfirmation;
