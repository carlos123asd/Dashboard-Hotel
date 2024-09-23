export default interface Booking{
    _id:string
    guest: string;
    orderDate: Date;
    checkin: Date;
    timein: Date;
    checkout: Date;
    timeout: Date;
    ordertime: Date;
    specialRequest: string;
    roomType: 'Suite' | 'Double Superior' | 'Double Bed' | 'Single Bed';
    status: 'Available' | 'Booked';
    idRoom: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
}
