export default class Employee{
    id:string
    photo:string[]
    name:string
    email:string
    startdate:string
    description:string
    phone:string
    status:string
    constructor(id:string,photo:string[],name:string,
        email:string,startdate:string,description:string,
        phone:string,status:string){
            this.id = id
            this.photo = photo
            this.name = name
            this.email = email
            this.startdate = startdate
            this.description = description
            this.phone = phone
            this.status = status
    }
}