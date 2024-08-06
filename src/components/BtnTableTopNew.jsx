import BtnTopNew from "../styles/table/BtnTopNew";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { ModalNewRoom } from "../styles/table/ModalNewRoom";

export default function BtnTableTopNew(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const inputtext = () => {

    }

    return <>
        <BtnTopNew>
            <div onClick={handleOpen} className="contentBtn">
                + New Room
            </div>
        </BtnTopNew>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{alignContent: 'center'}}
        >
            <ModalNewRoom>
                <h1>New Room</h1>
                <div className="contentRoomNewRoom">
                    <form action="">
                        <h2>Room Detail</h2>
                        <div>
                            <div className="contentRoomNewRoom__firstblock">
                                <label htmlFor="roomtype">Room Type</label>
                                <select id="contentRoomNewRoom__roomtype">
                                    <option>Single Bed</option>
                                    <option>Double Bed</option>
                                    <option>Double Superior</option>
                                    <option>Suite</option>
                                </select>
                            </div>
                            <div className="contentRoomNewRoom__firstblock">
                                <label htmlFor="roomnumber">Room Number</label>
                                <input id="roomnumber" type="text" placeholder="91234"></input>
                            </div>
                        </div>
                        
                        <br />
                        <label htmlFor="roomdescription">Description</label>
                        <textarea id="roomdescription" placeholder="Description of the room"></textarea>
                        <h2>Prices</h2>
                        <label htmlFor="offer">Offer</label>
                        <div>
                            <input onChange={inputtext} id="offer" name="offers" type="radio" value="si" />Si
                            <input id="offer" name="offers" type="radio" value="no" />No
                        </div>
                        <div>
                            <div>%</div>
                            <input name="numdescuento" type="text" placeholder="23" />
                        </div>

                        <label htmlFor="price">Price</label>
                        <div>
                            <div>$</div>
                            <input name="price" id="price" type="text" placeholder="323" />
                        </div>

                        <label htmlFor="roomcancellation">Cancellation policies</label>
                        <textarea id="roomcancellation" placeholder="Cancellation policies"></textarea>
                        <h2>Others</h2>
                        <label htmlFor="roomcancellation">Facilities</label>
                        <ul>
                            <div>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />AC</li>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />Shower</li>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />Towel</li>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />Bathup</li>
                            </div>
                            <div>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />Coffee Set</li>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />LED TV</li>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />Wifi</li>
                                <li><input id="roomcancellation" name="facilities" type="checkbox" />Room Service</li>
                            </div>
                        </ul>
                        
                        <label htmlFor="">Photos</label>
                    </form>
                    <div className="contentRoomInfo">
                        <div>
                            <div>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                            <h2>Double Superior 93463</h2>
                            <span className="contentRoomInfo__num">#32334</span>
                            <span className="contentRoomInfo__num">Price:</span>
                            <span className="contentRoomInfo__num">Offer:</span>
                            <span className="contentRoomInfo__num">Total:</span>
                        </div>
                    </div>
                </div>
            </ModalNewRoom>
        </Modal>
    </>
}


/*Fotos (mínimo 3, máximo 5)
*/