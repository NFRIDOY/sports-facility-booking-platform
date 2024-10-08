import { useParams } from "react-router-dom";
import { IFacility } from "../types/facility.interface";
import { sportsBanner } from "../utils/StaticData/SportsBanner";

// const FacilityDetailsPage = ({ facitity }: { facitity: IFacility }) => {
const FacilityDetailsPage = () => {
    const { id } = useParams();

    return (
        <div className="min-h-screen">
            <div>
                <img src={sportsBanner[0].bannerURL} alt="" />
            </div>
        </div>
    );
};

export default FacilityDetailsPage;
