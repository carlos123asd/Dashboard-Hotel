import dotenv from 'dotenv'
import {Application} from 'express'
import express from 'express'
import routerRoom from './controllers/Room'
import routerBooking from './controllers/Booking'
import routerMessage from './controllers/Message'
import routerUser from './controllers/User'
import routerAuth from './controllers/Auth'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger-output.json'
import { connectDB } from './db/conectionDB'
import { RoomModel } from './models/modelRoom'
import { UserModel } from './models/modelEmployee'
import { MessageModel } from './models/modelMessage'
import { BookingModel } from './models/modelBooking'
import { createRandomEmployee } from './faker/users'
import { createRandomBooking } from './faker/bookings'
import { createRandomMessage } from './faker/message'
import bcrypt from 'bcrypt'

dotenv.config()

const app:Application = express()
const port = process.env.PORT || "3000"
const apiPaths = {
    rooms: '/rooms',
    bookings: '/bookings',
    messages: '/messages',
    users: '/users',
}
/*función de seguridad que permite a los navegadores web realizar solicitudes
a un dominio diferente al que sirve la página web . Sin CORS, los navegadores
restringen dichas solicitudes debido a cuestiones de seguridad.*/
app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    res.send({
        msg: "Login"
    })
})
//Rutas Auth
app.use('/auth',routerAuth)

//Rutas generales
app.use(apiPaths.rooms,routerRoom)
app.use(apiPaths.bookings,routerBooking)
app.use(apiPaths.messages,routerMessage)
app.use(apiPaths.users,routerUser)

//Documentacion Rutas SwagGer
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
      

const startServer = async () => {
    try {
        await connectDB()
        RoomModel.create()
        BookingModel.create()
        MessageModel.create()
        UserModel.create()
        app.listen(port, () => console.log('Server listen on port 3000'))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer()

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