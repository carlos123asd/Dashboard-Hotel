var Room = /** @class */ (function () {
    function Room(id, roomNumber, photo, typeRoom, description, offer, price, discount, cancellation, status, amenities) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.photo = photo;
        this.typeRoom = typeRoom;
        this.description = description;
        this.offer = offer;
        this.price = price;
        this.discount = discount;
        this.cancellation = cancellation;
        this.status = status;
        this.amenities = amenities;
    }
    return Room;
}());
export default Room