import CBooking from "../class/CBooking";
import CBEmployee from "../class/CBooking";
import CMessage from "../class/CBooking";
import CRoom from "../class/CBooking";

export interface InterfacePropsTable {
    columns: string[],
    data: CBooking[]|CBEmployee[]|CMessage[]|CRoom[]
}