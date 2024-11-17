export default class CBooking{
    id: string
    guest: string
    orderdate: string
    checkin: string
    checkout: string
    specialrequest: string
    status: string
    room_id: number
    constructor(id:string,guest:string,orderDate:string,
        checkin:string,checkout:string,
        specialRequest:string,status:string,idRoom:number){
            this.id = id
            this.guest = guest
            this.orderdate = orderDate
            this.checkin = checkin
            this.checkout = checkout
            this.specialrequest = specialRequest
            this.status = status
            this.room_id = idRoom
    }
}
