var Employee = /** @class */ (function () {
    function Employee(id, photo, name, email, startdate, description, phone, status) {
        this.id = id;
        this.photo = photo;
        this.name = name;
        this.email = email;
        this.startdate = startdate;
        this.description = description;
        this.phone = phone;
        this.status = status;
    }
    return Employee;
}());

export default Employee