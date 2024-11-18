export default class CMessage{
    id:string
    date:string
    customer:string
    email:string
    phone:string
    reason:string
    comment:string
    status:string
    constructor(id:string,date:string,
        customer:string,email:string,phone:string,
        reason:string,comment:string,status:string){
            this.id = id
            this.date = date
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