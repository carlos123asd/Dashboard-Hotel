import Room from "../../interfaces/Room";
import { Rooms } from "../../models/modelRoom";

export default async function putRoom(id:string,dateUpdate:Room){
    await Rooms.updateOne({id}, dateUpdate)
    const roomUpdated = await Rooms.findById(id)
    return roomUpdated
}