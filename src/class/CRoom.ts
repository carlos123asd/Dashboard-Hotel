export default class CRoom{
    id:number
    room_number:number
    photo:string[]
    type_room:string
    description:string
    offer:boolean
    price:string
    discount:number
    cancellation:string
    status:string
    amenities:string[]
    constructor(id:number,roomNumber:number,photo:string[],
        typeRoom:string,description:string,offer:boolean,
        price:string,discount:number,cancellation:string,
        status:string,amenities:string[]){
            this.id = id
            this.room_number = roomNumber
            this.photo = photo
            this.type_room = typeRoom
            this.description = description
            this.offer = offer
            this.price = price
            this.discount = discount
            this.cancellation = cancellation
            this.status = status
            this.amenities = amenities
    }
}