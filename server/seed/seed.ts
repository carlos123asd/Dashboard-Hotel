import { createRandomEmployee } from '../src/faker/users'
import { createRandomBooking } from '../src/faker/bookings'
import { createRandomMessage } from '../src/faker/message'
import { connectDB } from '../src/db/conectionDB'
import bcrypt from 'bcrypt'
//FAKER USERS
/*
YDSHd2hRnnjZ4ml
SCiLmAXnKirTpkw
M2kroL42UYwdwcx
XMYAtuYBf8Eov4M
LK5o8dUzO7dCwTF
Zq3Eg142igaP3n8
jaibygqIZVnZ6qY
54xOO8ACA6Kjm5X
R7_EAbhq1Q1yP6b
PQfkSR7ewWquGBO*/
async function insertUsers(cantidad: number) {
    const connection = await connectDB();
    for (let i = 0; i < cantidad; i++) {
        const sql = `INSERT INTO users (photo, name, email, password, startdate, description, phone, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        let valores = createRandomEmployee();
        console.log(valores[3])
        const salt = await bcrypt.genSalt(10);
        valores[3] = await bcrypt.hash(valores[3], salt)

        await connection.execute(sql, valores);
    }
}
insertUsers(10)
    .then(() => console.log(`10 users insertados correctamente.`))
    .catch(err => console.error('Error insertando datos:', err));

//FAKER BOOKING
async function insertBookings(cantidad: number) {
    const connection = await connectDB();
    for (let i = 0; i < cantidad; i++) {
        const sql = `INSERT INTO bookings (guest, orderDate, checkin, timein, checkout, timeout, ordertime, specialRequest, roomType, status, idRoom) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const valores = createRandomBooking();

        await connection.execute(sql, valores);
    }
}
insertBookings(10)
    .then(() => console.log(`10 bookings insertados correctamente.`))
    .catch(err => console.error('Error insertando datos:', err));
//FAKER MESSAGE
async function insertMessage(cantidad: number) {
    const connection = await connectDB();
    for (let i = 0; i < cantidad; i++) {
        const sql = `INSERT INTO messages (date, customer, email, phone, reason, comment, status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const valores = createRandomMessage();

        await connection.execute(sql, valores);
    }
}
insertMessage(10)
    .then(() => console.log(`10 messages insertados correctamente.`))
    .catch(err => console.error('Error insertando datos:', err));