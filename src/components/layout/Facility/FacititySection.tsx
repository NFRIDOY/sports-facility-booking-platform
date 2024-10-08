// if (isLoading) {
//     return <Loading />
// }
// console.log("data => ", facitityData.data);

import { useGetFacilityQuery } from "../../../redux/api/api";
import { IFacility } from "../../../types/facility.interface";
import FacilityCard from "./FacilityCard/FacilityCard";

const FacititySection = () => {
    const { data: facitityData } = useGetFacilityQuery(undefined);
    return (
        <section className="grid grid-cols-3">
            {facitityData?.data.map((facitity: IFacility) => (
                <section>
                    <FacilityCard facitity={facitity} />
                </section>
            ))}
        </section>
    );
};

export default FacititySection;
