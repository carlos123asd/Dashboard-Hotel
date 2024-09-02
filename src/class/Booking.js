var Booking = /** @class */ (function () {
    function Booking(id, guest, orderDate, checkin, timein, checkout, timeout, ordertime, specialRequest, roomType, status, idRoom) {
        this.id = id;
        this.guest = guest;
        this.orderDate = orderDate;
        this.checkin = checkin;
        this.timein = timein;
        this.checkout = checkout;
        this.timeout = timeout;
        this.ordertime = ordertime;
        this.specialRequest = specialRequest;
        this.roomType = roomType;
        this.status = status;
        this.idRoom = idRoom;
    }
    return Booking;
}());

export default Booking