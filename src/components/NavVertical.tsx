import { ContentNavVertical,
    TitLogoNavVertical,
    ContentHeaderNavVertical,
    ImagenHeaderNavVertical,
    ListHeaderNavVertical,
    UnListContentHeaderNavVertical,
    ImageProfileHeaderNavVertical,
    ContentContactNavVertical,
    ContentCopyNavVertical } from "../styles/nav/nav"

import iconLogo from '../assets/imgs/menu/logo.svg'
import imgprofile from '../assets/imgs/menu/lateral/perfil.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import { Modal } from "@mui/material";
import { ModalNewRoom } from "../styles/table/ModalNewRoom";
import { useState } from "react";
import { useContextAuth } from "../features/context/AuthContext";
import MuiPhoneNumber from "mui-phone-number";
import validationEdituser from "../features/forms/validationformEditUser";
import { InterfaceStyleNavVertical } from "../interfaces/InterfaceStyleNavVertical";
import { appSelector } from "../features/hooks/hooks";
import User from '../class/CEmployee'

export default function NavVertical(props:InterfaceStyleNavVertical){

    const {stylenavvertical} = props
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const navigate = useNavigate();
    const {state}:any = useContextAuth()
    const locationname = useLocation().pathname;

    const handlevalidation = (e:any) => {
        const user = {
            photo: state.user.photo,
            name: (e.target.nameuser.value !== '') ? e.target.nameuser.value : state.user.name,
            email: (e.target.emailuser.value !== '') ? e.target.emailuser.value : state.user.email,
            password: (e.target.password.value !== '') ? e.target.password.value : state.user.password,
            description: (e.target.descriptionuser.value !== '') ? e.target.descriptionuser.value : state.user.description,
            phone: (e.target.phoneedituserNavVertical.value !== '') ? e.target.phoneedituserNavVertical.value : state.user.phone,
            status: (e.target.statususer.value !== '') ? e.target.statususer.value : state.user.status
        }
        console.log(user)
        const response = validationEdituser(state.user._id,user)
        response ? handleClose() : <></>
    }

    if(locationname === '/' || locationname === '/room'|| locationname === '/bookings'|| locationname === '/users'|| locationname === '/contact'){
        return <>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{alignContent: 'center'}}
            >
                <ModalNewRoom style={{width:'50%'}}>
                    <div className="contentRoomNewRoom">
                    <div className="contentRoomNewRoom">
                    <form onSubmit={(e) => handlevalidation(e)} action="">
                        <h2>User Details</h2>
                        <div className="sectionformbooking sectionformbooking--inputdetailemployee">
                            <div className="contentRoomNewRoom__firstblock contentRoomNewRoom--margin">
                                <label htmlFor="nameguest">Name</label>
                                <input className="inputroom" id="nameuser" name="nameuser" type="text" placeholder={state.user.name}></input>
                            </div>
                            <div className="contentRoomNewRoom__firstblock">
                                <label htmlFor="nameguest">Email</label>
                                <input className="inputroom" id="emailuser" name="emailuser" type="text" placeholder={state.user.email}></input>
                            </div>
                        </div>
                            
                        <div style={{marginTop:'1em'}} className="contentRoomNewRoom__priceblock sectionformbooking">
                            <label htmlFor="specialrequest">Description of the user</label>
                            <textarea name="descriptionuser" id="specialrequest" placeholder={state.user.description}></textarea>
                        </div>

                        <h2>Contact</h2>
                        <div className="sectionformbooking">
                            <label htmlFor="specialrequest">Phone</label>
                            <MuiPhoneNumber value={state.user.phone} style={{display:'block'}} defaultCountry={'es'} name="phoneedituserNavVertical" onChange={()=>{}}/>
                        </div>

                        <div className="contentRoomNewRoom__firstblock sectionformbooking">
                                <label style={{display:'inline-block',marginRight:'1em'}} htmlFor="roomtype">Status</label>
                                <select style={{display:'inline-block'}} name="statususer">
                                    <option value={'Active'}>Active</option>
                                    <option value={'Inactive'}>Inactive</option>
                                </select>
                        </div>

                        <h2>Password</h2>
                        <div>
                            <input type="text" name="password" placeholder={state.user.password}/>
                        </div>

                        <div style={{textAlign:'right'}}>
                             <input type="submit" value="Save"/>
                        </div>
                    </form>
                </div>
                    </div>
                </ModalNewRoom>
            </Modal>

         <ContentNavVertical style={stylenavvertical}>
                <ContentHeaderNavVertical>
                    <ImagenHeaderNavVertical src={iconLogo} alt="logo" />
                    <TitLogoNavVertical>Dashboard</TitLogoNavVertical>
                </ContentHeaderNavVertical>
                <UnListContentHeaderNavVertical>
                    <h2>Pages</h2>
                    <ListHeaderNavVertical onClick={() => navigate('/')}>
                        <svg width="30" height="30" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.59997 7.60059H2.67018C2.09355 7.59648 1.53864 7.79091 1.12754 8.14107C0.71642 8.49123 0.48278 8.96847 0.478027 9.46779V16.5346C0.488697 17.574 1.46995 18.4093 2.67018 18.4006H6.59997C7.17655 18.4048 7.73152 18.2104 8.14265 17.8602C8.55378 17.5101 8.78741 17.0328 8.79212 16.5334V9.46779C8.78741 8.96847 8.55378 8.49123 8.14265 8.14107C7.73152 7.79091 7.17655 7.59648 6.59997 7.60059Z" fill="#038F7A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.59997 0.400718H2.67018C1.49409 0.37247 0.513487 1.1739 0.478027 2.19232V3.40912C0.513487 4.42755 1.49409 5.22898 2.67018 5.20072H6.59997C7.776 5.22898 8.75665 4.42755 8.79212 3.40912V2.19232C8.75665 1.1739 7.776 0.37247 6.59997 0.400718Z" fill="#038F7A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7556 11.2008H17.684C18.2609 11.2053 18.8161 11.011 19.2275 10.6608C19.639 10.3106 19.8729 9.8332 19.8776 9.33364V2.26799C19.8729 1.76865 19.6392 1.29138 19.2281 0.941212C18.817 0.59104 18.262 0.396639 17.6854 0.400791H13.7556C13.179 0.396639 12.6241 0.59104 12.2129 0.941212C11.8018 1.29138 11.5682 1.76865 11.5635 2.26799V9.33364C11.5682 9.83296 11.8018 10.3102 12.2129 10.6604C12.6241 11.0105 13.179 11.2049 13.7556 11.2008Z" fill="#038F7A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7556 18.4007H17.684C18.8606 18.4296 19.8421 17.628 19.8776 16.6091V15.3923C19.8421 14.3739 18.8614 13.5725 17.6854 13.6007H13.7556C12.5796 13.5725 11.599 14.3739 11.5635 15.3923V16.6079C11.5981 17.6268 12.579 18.4289 13.7556 18.4007Z" fill="#038F7A"/>
                        </svg>
                        <span>Dashboard</span>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.83613 17.775L0.623657 16.725L9.54398 9.00001L0.623657 1.27501L1.83613 0.225006L11.9689 9.00001L1.83613 17.775Z" fill="white"/>
                        </svg>
                    </ListHeaderNavVertical>

                    <ListHeaderNavVertical onClick={() => navigate('/room')}>
                        <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_35_68)">
                            <path d="M1.80001 3.60001C1.20517 3.60001 0.720011 4.08516 0.720011 4.68001V9.65251C1.18689 9.24751 1.77751 8.91985 2.52001 8.66251V7.20001C2.52001 6.24235 4.15548 6.12001 5.58001 6.12001C7.00454 6.12001 8.64001 6.24235 8.64001 7.20001V7.92001C8.76095 7.9186 8.87626 7.92001 9.00001 7.92001C9.12376 7.92001 9.23907 7.9186 9.36001 7.92001V7.20001C9.36001 6.24235 10.9955 6.12001 12.42 6.12001C13.8445 6.12001 15.48 6.24235 15.48 7.20001V8.65126C16.2211 8.90719 16.8089 9.24188 17.28 9.65251V4.68001C17.28 4.08516 16.7949 3.60001 16.2 3.60001H1.80001ZM9.00001 8.64001C2.12626 8.64001 -0.0056139 9.91126 1.1096e-05 13.32H18C18.0056 9.88876 15.8738 8.64001 9.00001 8.64001ZM1.1096e-05 14.04V18H2.52001V16.56C2.52001 16.0425 2.72251 15.84 3.24001 15.84H14.76C15.2775 15.84 15.48 16.0425 15.48 16.56V18H18V14.04H1.1096e-05Z" fill="#038F7A"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_35_68">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span>Rooms</span>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.83613 17.775L0.623657 16.725L9.54398 9.00001L0.623657 1.27501L1.83613 0.225006L11.9689 9.00001L1.83613 17.775Z" fill="white"/>
                        </svg>
                    </ListHeaderNavVertical>

                    <ListHeaderNavVertical onClick={() => navigate('/bookings')}>
                        <svg width="30" height="30" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.51929 14.3505H5.03118V11.4109C5.03118 10.7845 5.27511 10.447 5.82146 10.3795H7.52909C7.79726 10.3574 8.06705 10.3934 8.32001 10.4851C8.57296 10.5769 8.8031 10.7223 8.99466 10.9112C9.18466 11.0987 9.33106 11.3258 9.42347 11.5762C9.51587 11.8266 9.55202 12.0943 9.52933 12.3603C9.52933 13.6133 8.76339 14.3602 7.52909 14.3602L7.51929 14.3505ZM5.02623 6.40359V5.63251C5.02623 4.95781 5.31895 4.63006 5.95328 4.59146H7.23142C8.32432 4.59146 8.98783 5.23736 8.98783 6.3265C8.98783 7.14578 8.53896 8.10963 7.28021 8.10963H5.03603L5.02623 6.40359ZM10.7052 9.34334L10.2563 9.09278L10.6466 8.75533C11.1051 8.36989 11.8662 7.49272 11.8662 5.9843C11.8661 3.67105 10.0512 2.17708 7.24607 2.17708H3.68456C2.84905 2.20538 2.18455 2.87899 2.17712 3.7048V16.8132H7.3095C10.4318 16.8132 12.442 15.1362 12.442 12.5337C12.442 11.1362 11.7931 9.93135 10.6954 9.3289" fill="#038F7A"/>
                            <path d="M15.0358 16.217C15.6809 16.217 16.204 15.6983 16.204 15.0585C16.204 14.4187 15.6809 13.9 15.0358 13.9C14.3906 13.9 13.8676 14.4187 13.8676 15.0585C13.8676 15.6983 14.3906 16.217 15.0358 16.217Z" fill="#038F7A"/>
                        </svg>
                        <span>Bookings</span>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.83613 17.775L0.623657 16.725L9.54398 9.00001L0.623657 1.27501L1.83613 0.225006L11.9689 9.00001L1.83613 17.775Z" fill="white"/>
                        </svg>
                    </ListHeaderNavVertical>

                    <ListHeaderNavVertical onClick={() => navigate('/users')}>
                        <svg width="30" height="30" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4899 9.88738L11.2128 9.41003C11.0335 9.52459 10.935 9.73884 10.9614 9.95734C10.9876 10.1757 11.1337 10.3577 11.3345 10.4219L11.4899 9.88738ZM6.51004 9.88738L6.66545 10.4219C6.86628 10.3577 7.01239 10.1757 7.03871 9.95734C7.06493 9.73884 6.96646 9.52459 6.7871 9.41003L6.51004 9.88738ZM13.2626 5.58824C13.2626 7.20658 12.443 8.62466 11.2128 9.41003L11.767 10.3647C13.3015 9.38499 14.3283 7.61263 14.3283 5.58824H13.2626ZM9.00003 1.11765C11.3542 1.11765 13.2626 3.1192 13.2626 5.58824H14.3283C14.3283 2.50194 11.9427 0 9.00003 0V1.11765ZM4.73741 5.58824C4.73741 3.1192 6.64583 1.11765 9.00003 1.11765V0C6.05729 0 3.67176 2.50194 3.67176 5.58824H4.73741ZM6.7871 9.41003C5.55697 8.62466 4.73741 7.20659 4.73741 5.58824H3.67176C3.67176 7.61263 4.69847 9.38499 6.233 10.3647L6.7871 9.41003ZM6.35465 9.35281C2.99067 10.4287 0.457344 13.5016 0.0117757 17.2567L1.06926 17.3947C1.46206 14.0844 3.69718 11.3712 6.66545 10.4219L6.35465 9.35281ZM0.0117757 17.2567C-0.105989 18.2492 0.677922 19 1.54047 19V17.8824C1.22594 17.8824 1.04166 17.6274 1.06926 17.3947L0.0117757 17.2567ZM1.54047 19H16.4596V17.8824H1.54047V19ZM16.4596 19C17.3221 19 18.106 18.2492 17.9882 17.2567L16.9307 17.3947C16.9583 17.6274 16.774 17.8824 16.4596 17.8824V19ZM17.9882 17.2567C17.5427 13.5016 15.0093 10.4287 11.6453 9.35281L11.3345 10.4219C14.3028 11.3712 16.5379 14.0844 16.9307 17.3947L17.9882 17.2567Z" fill="#038F7A"/>
                        </svg>
                        <span>Users</span>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.83613 17.775L0.623657 16.725L9.54398 9.00001L0.623657 1.27501L1.83613 0.225006L11.9689 9.00001L1.83613 17.775Z" fill="white"/>
                        </svg>
                    </ListHeaderNavVertical>

                    <ListHeaderNavVertical onClick={() => navigate('/contact')}>
                        <svg width="30" height="30" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.29167 5.375H14.7083H4.29167ZM4.29167 9.54166H14.7083H4.29167ZM18.875 16.8333L15.4122 15.1019C15.1497 14.9706 15.0184 14.905 14.8808 14.8587C14.7587 14.8177 14.633 14.788 14.5054 14.7701C14.3617 14.75 14.2149 14.75 13.9215 14.75H3.45833C2.29155 14.75 1.70817 14.75 1.26252 14.5229C0.87051 14.3232 0.551802 14.0045 0.352073 13.6125C0.125 13.1669 0.125 12.5834 0.125 11.4167V3.5C0.125 2.33322 0.125 1.74983 0.352073 1.30418C0.551802 0.912175 0.87051 0.593466 1.26252 0.393737C1.70817 0.166664 2.29156 0.166664 3.45833 0.166664H15.5417C16.7084 0.166664 17.2919 0.166664 17.7375 0.393737C18.1295 0.593466 18.4482 0.912175 18.6479 1.30418C18.875 1.74983 18.875 2.33323 18.875 3.5V16.8333Z" fill="#038F7A"/>
                        </svg>
                        <span>Messages</span>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.83613 17.775L0.623657 16.725L9.54398 9.00001L0.623657 1.27501L1.83613 0.225006L11.9689 9.00001L1.83613 17.775Z" fill="white"/>
                        </svg>
                    </ListHeaderNavVertical>
                </UnListContentHeaderNavVertical>
                <ContentContactNavVertical>
                    <ImageProfileHeaderNavVertical>
                        <img src={state.user.photo} alt="Image Profile" />
                    </ImageProfileHeaderNavVertical>
                    <span className='titprofile'>{state.user.name}</span>
                    <span id="emailprofile" className='subtitprofile'>{state.user.email}</span>
                    <div onClick={handleOpen} className='btnContactUs'>Edit Profile</div>
                </ContentContactNavVertical>
                <ContentCopyNavVertical>
                    <span className='titcopy'>Travl Hotel Admin Dashboard</span>
                    <span className='subtitcopy'>© 2024 All Rights Reserved</span>
                    <span className='madecopy'>Made with ♥ by AlexDev</span>
                </ContentCopyNavVertical>
        </ContentNavVertical>
    </>
    }
}