import { useParams } from "react-router-dom";
import { sportsBanner } from "../utils/StaticData/SportsBanner";
import { useGetFacilityByIdQuery } from "../redux/api/api";
import Loading from "../components/ui/Loadings/Loading";
import ErrorCommon from "../components/ui/Error/ErrorCommon";
import { IFacility } from "../types/facility.interface";

// const FacilityDetailsPage = ({ facitity }: { facitity: IFacility }) => {
const FacilityDetailsPage = () => {
    const { id } = useParams();

    const {
        isError,
        isLoading,
        data: FacilityData,
    } = useGetFacilityByIdQuery(id);

    const matchedIndex = sportsBanner.findIndex(
        (banner) =>
            FacilityData?.data.name
                .toLowerCase()
                .includes(banner.type.slice(1, 3).toLowerCase()) ||
            FacilityData?.data.name
                .toLowerCase()
                .includes(banner.type.slice(4, 6).toLowerCase())
    );
    const facilityDetails: IFacility = FacilityData?.data;
    console.log(FacilityData?.data);
    if (isLoading) return <Loading />;

    if (isError) return <ErrorCommon />;

    return (
        <div className="min-h-screen relative">
            <div>
                {matchedIndex !== -1 && (
                    <img
                        className="object-cover h-96 w-screen"
                        src={sportsBanner[matchedIndex].bannerURL}
                        alt="S  ports Banner"
                    />
                )}
            </div>
            <h1 className="text-6xl bg-gradient-to-r from-sky-300 to-sky-400 py-4 px-8 flex justify-between">
                <span>{facilityDetails.name}</span>
                <span className="text-white">
                    ${facilityDetails.pricePerHour}/Hour
                </span>
            </h1>

    <div className="text-2xl text-gray-600 px-10">Description: {facilityDetails.description}</div>
    <div className="text-2xl text-gray-600 px-10">Location: {facilityDetails.location}</div>
        </div>
    );
};

export default FacilityDetailsPage;

// const FacilityDetailsPage: React.FC = () => {
//     const [image, setImage] = useState<number>(1);

//     return (
//         <div className="antialiased">
//             <div className="bg-indigo-700 text-indigo-200 md:text-center py-2 px-4">
//                 Inspired from Dribbble Shot by{' '}
//                 <a href="https://dribbble.com/shots/14127375-Product-Page" className="font-bold underline hover:text-indigo-100">
//                     Vishnu Prasad
//                 </a>
//                 . See his works on{' '}
//                 <a href="https://dribbble.com/vlockn" className="font-bold underline hover:text-indigo-100">
//                     Dribbble
//                 </a>
//                 .
//             </div>

//             <div className="bg-white shadow-sm sticky top-0">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
//                     <div className="flex items-center justify-between md:justify-start">
//                         {/* Menu Trigger */}
//                         <button type="button" className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
//                             <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                         </button>
//                         {/* ./ Menu Trigger */}

//                         <a href="#" className="font-bold text-gray-700 text-2xl">
//                             Shop.
//                         </a>

//                         <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
//                             <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
//                                 Electronics
//                             </a>
//                             <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
//                                 Fashion
//                             </a>
//                             <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
//                                 Tools
//                             </a>
//                             <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
//                                 Books
//                             </a>
//                             <a href="#" className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
//                                 More
//                             </a>
//                         </div>

//                         <div className="flex items-center space-x-4">
//                             <div className="relative hidden md:block">
//                                 <input
//                                     type="search"
//                                     className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
//                                     placeholder="Search"
//                                 />
//                                 <svg
//                                     className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                                 </svg>
//                             </div>

//                             <a
//                                 href="#"
//                                 className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
//                             >
//                                 <svg
//                                     className="h-6 w-6 leading-none text-gray-300 stroke-current"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                                 </svg>
//                                 <span className="pl-1 text-gray-500 text-md">0</span>
//                             </a>

//                             <button
//                                 type="button"
//                                 className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
//                             >
//                                 <img
//                                     src="https://avatars.dicebear.com/api/bottts/2.svg"
//                                     alt="bottts"
//                                     width="28"
//                                     height="28"
//                                     className="rounded-lg mx-auto"
//                                 />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Search Mobile */}
//                     <div className="relative md:hidden">
//                         <input
//                             type="search"
//                             className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
//                             placeholder="Search"
//                         />

//                         <svg
//                             className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                         </svg>
//                     </div>
//                     {/* ./ Search Mobile */}
//                 </div>
//             </div>

//             <div className="py-6">
//                 {/* Breadcrumbs */}
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center space-x-2 text-gray-400 text-sm">
//                         <a href="#" className="hover:underline hover:text-gray-600">
//                             Home
//                         </a>
//                         <span>
//                             <svg
//                                 className="h-5 w-5 leading-none text-gray-300"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </span>
//                         <a href="#" className="hover:underline hover:text-gray-600">
//                             Electronics
//                         </a>
//                         <span>
//                             <svg
//                                 className="h-5 w-5 leading-none text-gray-300"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </span>
//                         <span>Headphones</span>
//                     </div>
//                 </div>
//                 {/* ./ Breadcrumbs */}

//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
//                     <div className="flex flex-col md:flex-row -mx-4">
//                         <div className="md:flex-1 px-4">
//                             <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
//                                 {image === 1 && <span className="text-5xl">1</span>}
//                                 {image === 2 && <span className="text-5xl">2</span>}
//                                 {image === 3 && <span className="text-5xl">3</span>}
//                                 {image === 4 && <span className="text-5xl">4</span>}
//                             </div>

//                             <div className="flex -mx-2 mb-4">
//                                 {[1, 2, 3, 4].map((i) => (
//                                     <div className="flex-1 px-2" key={i}>
//                                         <button
//                                             onClick={() => setImage(i)}
//                                             className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
//                                                 image === i ? 'ring-2 ring-indigo-300 ring-inset' : ''
//                                             }`}
//                                         >
//                                             <span className="text-2xl">{i}</span>
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Add your product details section here */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FacilityDetailsPage;
