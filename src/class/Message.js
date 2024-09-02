
var Message = /** @class */ (function () {
    function Message(id, date, idmessage, customer, email, phone, reason, comment, status) {
        this.id = id;
        this.date = date;
        this.idmessage = idmessage;
        this.customer = customer;
        this.email = email;
        this.phone = phone;
        this.reason = reason;
        this.comment = comment;
        this.status = status;
    }
    Message.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Message;
}());
export default Message;
