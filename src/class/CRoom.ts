export default class CRoom{
    _id:string
    roomNumber:number
    photo:string[]
    typeRoom:string
    description:string
    offer:boolean
    price:string
    discount:number
    cancellation:string
    status:string
    amenities:string[]
    constructor(id:string,roomNumber:number,photo:string[],
        typeRoom:string,description:string,offer:boolean,
        price:string,discount:number,cancellation:string,
        status:string,amenities:string[]){
            this._id = id
            this.roomNumber = roomNumber
            this.photo = photo
            this.typeRoom = typeRoom
            this.description = description
            this.offer = offer
            this.price = price
            this.discount = discount
            this.cancellation = cancellation
            this.status = status
            this.amenities = amenities
    }
}