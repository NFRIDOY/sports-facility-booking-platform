import Banner from "../components/layout/Banners/Banner";
import FacilityCard from "../components/layout/Facility/FacilityCard/FacilityCard";
import { useGetFacilityQuery } from "../redux/api/api";
import { IFacility } from "../types/facility.interface";

export default function Home() {
    const { isLoading, data: facitityData } = useGetFacilityQuery(undefined);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log("data => ", facitityData.data);
    return (
        <div>
            <Banner />
            <section>
                {facitityData?.data.map((facitity : IFacility) => (
                    <>
                        <FacilityCard facitity={facitity}/>
                    </>
                ))}
            </section>
        </div>
    );
}
