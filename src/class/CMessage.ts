export default class Message{
    _id:string
    date:string
    idmessage:number
    customer:string
    email:string
    phone:string
    reason:string
    comment:string
    status:string
    constructor(id:string,date:string,idmessage:number,
        customer:string,email:string,phone:string,
        reason:string,comment:string,status:string){
            this._id = id
            this.date = date
            this.idmessage = idmessage
            this.customer = customer
            this.email = email
            this.phone = phone
            this.reason = reason
            this.comment = comment
            this.status = status
    }
    setStatus(status:string){
        this.status = status
    }
}