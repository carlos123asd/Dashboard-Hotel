"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

import { createAsyncThunk } from "@reduxjs/toolkit";

export const dbThunk = createAsyncThunk('dbThunk', (table = "") => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    if (table === "") {
        const rooms = yield fetch('http://localhost:3004/rooms');
        const bookings = yield fetch('http://localhost:3004/bookings');
        const employee = yield fetch('http://localhost:3004/employee');
        const comment = yield fetch('http://localhost:3004/comment');
        let data;
        if (rooms.ok && bookings.ok && employee.ok && comment.ok) {
            const jsonrooms = yield rooms.json();
            const jsonbookings = yield bookings.json();
            const jsonemployee = yield employee.json();
            const jsoncomment = yield comment.json();
            data = {
                "rooms": jsonrooms.sort((a, b) => b.roomNumber - a.roomNumber),
                "bookings": jsonbookings.sort((a, b) => b.orderDate - a.orderDate),
                "employee": jsonemployee.sort((a, b) => b.startdate - a.startdate),
                "comment": jsoncomment.sort((a, b) => (b.date.split(' '))[0] - (a.date.split(' '))[0]),
            };
            console.log('HOO',data)
            return data;
        }
    }
    else if (table === 'rooms') {
        response = yield fetch('http://localhost:3004/rooms');
        if (response.ok) {
            const json = yield response.json();
            return json.sort((a, b) => b.roomNumber - a.roomNumber);
        }
    }
    else if (table === 'bookings') {
        response = yield fetch('http://localhost:3004/bookings');
        if (response.ok) {
            const json = yield response.json();
            return json.sort((a, b) => b.orderDate > a.orderDate);
        }
    }
}));
