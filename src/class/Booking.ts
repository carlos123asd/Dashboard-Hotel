export default class Booking{
    id?: string
    guest?: string
    orderDate?: string
    checkin?: string
    timein?: string
    checkout?: string
    timeout?: string
    ordertime?: string
    specialRequest?: string
    roomType?: string
    status?: string
    idRoom?: number
    constructor(id:string,guest:string,orderDate:string,
        checkin:string,timein:string,checkout:string,
        timeout:string,ordertime:string,specialRequest:string,
        roomType:string,status:string,idRoom:number){
            this.id = id
            this.guest = guest
            this.orderDate = orderDate
            this.checkin = checkin
            this.timein = timein
            this.checkout = checkout
            this.timeout = timeout
            this.ordertime = ordertime
            this.specialRequest = specialRequest
            this.roomType = roomType
            this.status = status
            this.idRoom = idRoom
    }
}
