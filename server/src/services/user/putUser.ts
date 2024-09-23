import User from "../../interfaces/Employee";
import { Users } from "../../models/modelEmployee";

export default async function putUser(id:string,dateUpdate:User){
    await Users.updateOne({id}, dateUpdate)
    const userUpdated = await Users.findById(id)
    return userUpdated
}