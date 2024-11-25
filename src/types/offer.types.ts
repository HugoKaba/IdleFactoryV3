import {ObjectId} from "mongodb";

export interface Offer {
    seller: ObjectId
    resource: ObjectId
    price: number
    amount: number
}