import { Bookings } from "../../models/modelBooking";

export default async function putBooking(id:string,dateUpdate:Object){
    await Bookings.updateOne({id}, dateUpdate)
    return await Bookings.findById(id)
}