import { Messages } from "../../models/modelMessage";

export default async function putMessage(id:string,dateUpdate:Object){
    await Messages.findByIdAndUpdate({id}, dateUpdate)
    return await Messages.findById(id)
}