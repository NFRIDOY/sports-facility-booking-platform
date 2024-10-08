import { useParams } from "react-router-dom";
import { sportsBanner } from "../utils/StaticData/SportsBanner";
import { useGetFacilityByIdQuery } from "../redux/api/api";
import Loading from "../components/ui/Loadings/Loading";
import ErrorCommon from "../components/ui/Error/ErrorCommon";

// const FacilityDetailsPage = ({ facitity }: { facitity: IFacility }) => {
const FacilityDetailsPage = () => {
    const { id } = useParams();

    const {
        isError,
        isLoading,
        data: FacilityData,
    } = useGetFacilityByIdQuery(id);

    const matchedIndex = sportsBanner.findIndex((banner) =>
        FacilityData?.data.name
            .toLowerCase()
            .includes(banner.type.slice(1,3).toLowerCase()) || FacilityData?.data.name
            .toLowerCase()
            .includes(banner.type.slice(4,6).toLowerCase())
    );

    console.log(FacilityData?.data);
    if (isLoading) return <Loading />;

    if (isError) return <ErrorCommon />;

    return (
        <div className="min-h-screen">
            {/* <div>
                {FacilityData?.data.name
                    .toLowerCase()
                    .includes(sportsBanner[0].type.toLowerCase()) && (
                    <img
                        className="object-cover h-80 w-screen"
                        src={sportsBanner[0].bannerURL}
                        alt=""
                    />
                )}
            </div> */}
            <div>
                {matchedIndex !== -1 && (
                    <img
                        className="object-cover h-96 w-screen"
                        src={sportsBanner[matchedIndex].bannerURL}
                        alt=""
                    />
                )}
            </div>
            <div></div>
        </div>
    );
};

export default FacilityDetailsPage;
