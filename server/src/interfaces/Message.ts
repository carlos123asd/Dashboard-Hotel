export default interface Message{
    date:Date
    customer:string
    email:string
    phone:string
    reason:string
    comment:string
    status:'none'|'published'|'archived'
}