export interface IFacility {
    _id: string;
    name: string;
    description: string;
    pricePerHour: string;
    location: string;
    isDeleted?: boolean;
}