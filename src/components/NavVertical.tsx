import { ContentNavVertical,
    TitLogoNavVertical,
    SubTitLogoNavVertical,
    ContentHeaderNavVertical,
    ImagenHeaderNavVertical,
    ListHeaderNavVertical,
    UnListContentHeaderNavVertical,
    SelectListHeaderNavVertical,
    ImageProfileHeaderNavVertical,
    ContentContactNavVertical,
    ContentCopyNavVertical } from "../styles/nav/nav"

import iconLogo from '../assets/imgs/logo.svg'
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
                    <div>
                        <TitLogoNavVertical>Travl</TitLogoNavVertical>
                        <SubTitLogoNavVertical>Hotel Admin Dashboard</SubTitLogoNavVertical>
                    </div>
                </ContentHeaderNavVertical>
                <div>
                    <UnListContentHeaderNavVertical>
                        <ListHeaderNavVertical onClick={() => navigate('/')}>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.15625 7.10001H11.9375C12.1281 7.10001 12.3109 7.02889 12.4457 6.9023C12.5805 6.77572 12.6562 6.60403 12.6562 6.42501V1.02501C12.6562 0.845985 12.5805 0.674296 12.4457 0.547709C12.3109 0.421122 12.1281 0.350006 11.9375 0.350006H2.59375C2.02188 0.350006 1.47343 0.563354 1.06905 0.943115C0.664676 1.32288 0.4375 1.83794 0.4375 2.37501V6.42501C0.4375 6.60403 0.513225 6.77572 0.648017 6.9023C0.782809 7.02889 0.965626 7.10001 1.15625 7.10001ZM1.875 2.37501C1.875 2.19598 1.95073 2.0243 2.08552 1.89771C2.22031 1.77112 2.40313 1.70001 2.59375 1.70001H11.2188V5.75001H1.875V2.37501ZM19.8438 8.45001H1.15625C0.965626 8.45001 0.782809 8.52112 0.648017 8.64771C0.513225 8.7743 0.4375 8.94599 0.4375 9.12501V12.5C0.4375 12.679 0.513225 12.8507 0.648017 12.9773C0.782809 13.1039 0.965626 13.175 1.15625 13.175H19.8438C20.0344 13.175 20.2172 13.1039 20.352 12.9773C20.4868 12.8507 20.5625 12.679 20.5625 12.5V9.12501C20.5625 8.94599 20.4868 8.7743 20.352 8.64771C20.2172 8.52112 20.0344 8.45001 19.8438 8.45001ZM19.125 11.825H1.875V9.80001H19.125V11.825ZM6.1875 14.525H1.15625C0.965626 14.525 0.782809 14.5961 0.648017 14.7227C0.513225 14.8493 0.4375 15.021 0.4375 15.2V17.225C0.4375 17.7621 0.664676 18.2771 1.06905 18.6569C1.47343 19.0367 2.02188 19.25 2.59375 19.25H6.1875C6.37812 19.25 6.56094 19.1789 6.69573 19.0523C6.83052 18.9257 6.90625 18.754 6.90625 18.575V15.2C6.90625 15.021 6.83052 14.8493 6.69573 14.7227C6.56094 14.5961 6.37812 14.525 6.1875 14.525ZM5.46875 17.9H2.59375C2.40313 17.9 2.22031 17.8289 2.08552 17.7023C1.95073 17.5757 1.875 17.404 1.875 17.225V15.875H5.46875V17.9ZM19.8438 14.525H9.0625C8.87188 14.525 8.68906 14.5961 8.55427 14.7227C8.41948 14.8493 8.34375 15.021 8.34375 15.2V18.575C8.34375 18.754 8.41948 18.9257 8.55427 19.0523C8.68906 19.1789 8.87188 19.25 9.0625 19.25H18.4062C18.9781 19.25 19.5266 19.0367 19.9309 18.6569C20.3353 18.2771 20.5625 17.7621 20.5625 17.225V15.2C20.5625 15.021 20.4868 14.8493 20.352 14.7227C20.2172 14.5961 20.0344 14.525 19.8438 14.525ZM19.125 17.225C19.125 17.404 19.0493 17.5757 18.9145 17.7023C18.7797 17.8289 18.5969 17.9 18.4062 17.9H9.78125V15.875H19.125V17.225ZM18.4062 0.350006H14.8125C14.6219 0.350006 14.4391 0.421122 14.3043 0.547709C14.1695 0.674296 14.0938 0.845985 14.0938 1.02501V6.42501C14.0938 6.60403 14.1695 6.77572 14.3043 6.9023C14.4391 7.02889 14.6219 7.10001 14.8125 7.10001H19.8438C20.0344 7.10001 20.2172 7.02889 20.352 6.9023C20.4868 6.77572 20.5625 6.60403 20.5625 6.42501V2.37501C20.5625 1.83794 20.3353 1.32288 19.9309 0.943115C19.5266 0.563354 18.9781 0.350006 18.4062 0.350006ZM19.125 5.75001H15.5312V1.70001H18.4062C18.5969 1.70001 18.7797 1.77112 18.9145 1.89771C19.0493 2.0243 19.125 2.19598 19.125 2.37501V5.75001Z" fill="#799283"/>
                            </svg>Dashboard
                        </ListHeaderNavVertical>

                        <ListHeaderNavVertical onClick={() => navigate('/room')}>
                            <svg width="21" height="20" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.95429 13.1565C6.95429 13.0836 6.89385 13.0261 6.82034 13.0261H6.14732C6.07381 13.0261 6.01337 13.0844 6.01337 13.1565V13.7309H4.45581V14.6602H6.81875C6.831 14.6602 6.84407 14.6562 6.85632 14.6521C6.91104 14.6359 6.9527 14.5881 6.9527 14.5298V13.1549L6.95429 13.1565Z" fill="#799283"/>
                            <path d="M6.14963 16.7407H6.82265C6.89616 16.7407 6.9566 16.6808 6.9566 16.6079V15.2346C6.9566 15.1617 6.89616 15.1017 6.82265 15.1017H4.45972V16.0326H6.01728V16.6054C6.01728 16.6783 6.07772 16.7383 6.15123 16.7383L6.14963 16.7407Z" fill="#799283"/>
                            <path d="M4.0121 4.19673H4.77495C5.90207 4.19673 6.81766 3.29013 6.81766 2.17208C6.81766 1.05403 5.90207 0.14743 4.77495 0.14743H2.08625C0.959123 0.14743 0.045166 1.05565 0.045166 2.17208C0.045166 3.2877 0.959123 4.19673 2.08625 4.19673H2.85156V16.608C2.85156 16.6809 2.91037 16.7409 2.98143 16.7409H3.88232C3.95337 16.7409 4.01382 16.6809 4.01382 16.608V16.2636C4.01382 16.2636 4.01137 16.2596 4.01137 16.2572C4.01137 16.2547 4.01382 16.2547 4.01382 16.2531V14.8888C4.01382 14.8888 4.01137 14.8863 4.01137 14.8847C4.01137 14.8823 4.01382 14.8807 4.01382 14.8782V13.5179L4.01137 13.5139C4.01137 13.5115 4.01382 13.5098 4.01382 13.5074L4.01463 4.19668L4.0121 4.19673ZM2.08619 2.9774C1.63861 2.9774 1.27514 2.61686 1.27514 2.17289C1.27514 1.72891 1.63861 1.36838 2.08619 1.36838H4.77489C5.22247 1.36838 5.58593 1.72891 5.58593 2.17289C5.58593 2.61686 5.22247 2.9774 4.77489 2.9774H2.08619Z" fill="#799283"/>
                            </svg>
                            <SelectListHeaderNavVertical name="roooms" id="rooms">
                                <option>Room</option>
                            </SelectListHeaderNavVertical>
                        </ListHeaderNavVertical>

                        <ListHeaderNavVertical onClick={() => navigate('/bookings')}>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3795 12.805C17.2102 12.805 16.0408 13.2494 15.1485 14.1391C13.3639 15.9176 13.3639 18.8009 15.1485 20.5794C16.0408 21.4686 17.2102 21.9135 18.3795 21.9135C19.5494 21.9135 20.7187 21.4686 21.611 20.5794C23.3956 18.8009 23.3956 15.9176 21.611 14.1391C20.7187 13.2499 19.5494 12.805 18.3795 12.805ZM20.8719 19.8428C20.2064 20.5059 19.3209 20.8716 18.3795 20.8716C17.4386 20.8716 16.5531 20.5059 15.8877 19.8428C14.5134 18.4733 14.5134 16.2453 15.8877 14.8757C16.5531 14.2121 17.4386 13.8469 18.3795 13.8469C19.3209 13.8469 20.2064 14.2121 20.8719 14.8757C21.5373 15.5389 21.9043 16.4208 21.9043 17.359C21.9043 18.2972 21.5373 19.1797 20.8719 19.8428ZM19.8636 16.6698H18.8182V15.6279C18.8182 15.3404 18.584 15.107 18.2955 15.107C18.0069 15.107 17.7727 15.3404 17.7727 15.6279V17.1907C17.7727 17.4783 18.0069 17.7116 18.2955 17.7116H19.8636C20.1522 17.7116 20.3864 17.4783 20.3864 17.1907C20.3864 16.9031 20.1522 16.6698 19.8636 16.6698ZM12.5455 20.3163C12.5574 20.3163 12.0465 20.3159 12.0582 20.3151C12.3302 20.2969 12.5455 20.071 12.5455 19.7953C12.5455 19.5078 12.3113 19.2744 12.0227 19.2744H2.09091C1.51434 19.2744 1.04545 18.8071 1.04545 18.2326V7.29302H20.3864V10.9395C20.3864 11.2271 20.6205 11.4605 20.9091 11.4605C21.1976 11.4605 21.4318 11.2271 21.4318 10.9395V4.16744C21.4318 3.01827 20.494 2.08372 19.3409 2.08372H17.25V1.82326C17.25 0.81786 16.4293 0 15.4205 0C14.4116 0 13.5909 0.81786 13.5909 1.82326V2.08372H8.36364V1.82326C8.36364 0.81786 7.54295 0 6.53409 0C5.52523 0 4.70455 0.81786 4.70455 1.82326V2.08372H2.09091C0.937773 2.08372 0 3.01827 0 4.16744V18.2326C0 19.3817 0.937773 20.3163 2.09091 20.3163H12.5455ZM1.04545 4.16744C1.04545 3.59286 1.51434 3.12558 2.09091 3.12558H4.70455V3.38605C4.70455 4.39144 5.52523 5.2093 6.53409 5.2093C7.54295 5.2093 8.36364 4.39144 8.36364 3.38605V3.12558H13.5909V3.38605C13.5909 4.39144 14.4116 5.2093 15.4205 5.2093C16.4293 5.2093 17.25 4.39144 17.25 3.38605V3.12558H19.3409C19.9175 3.12558 20.3864 3.59286 20.3864 4.16744V6.25116H1.04545V4.16744ZM5.75 1.82326C5.75 1.39245 6.1018 1.04186 6.53409 1.04186C6.96639 1.04186 7.31818 1.39245 7.31818 1.82326V3.38605C7.31818 3.81686 6.96639 4.16744 6.53409 4.16744C6.1018 4.16744 5.75 3.81686 5.75 3.38605V1.82326ZM14.6364 1.82326C14.6364 1.39245 14.9882 1.04186 15.4205 1.04186C15.8527 1.04186 16.2045 1.39245 16.2045 1.82326V3.38605C16.2045 3.81686 15.8527 4.16744 15.4205 4.16744C14.9882 4.16744 14.6364 3.81686 14.6364 3.38605V1.82326ZM5.48864 8.33488C4.47977 8.33488 3.65909 9.15274 3.65909 10.1581C3.65909 11.1635 4.47977 11.9814 5.48864 11.9814C6.4975 11.9814 7.31818 11.1635 7.31818 10.1581C7.31818 9.15274 6.4975 8.33488 5.48864 8.33488ZM5.48864 10.9395C5.05634 10.9395 4.70455 10.5889 4.70455 10.1581C4.70455 9.72733 5.05634 9.37674 5.48864 9.37674C5.92093 9.37674 6.27273 9.72733 6.27273 10.1581C6.27273 10.5889 5.92093 10.9395 5.48864 10.9395ZM10.7159 8.33488C9.70705 8.33488 8.88636 9.15274 8.88636 10.1581C8.88636 11.1635 9.70705 11.9814 10.7159 11.9814C11.7248 11.9814 12.5455 11.1635 12.5455 10.1581C12.5455 9.15274 11.7248 8.33488 10.7159 8.33488ZM10.7159 10.9395C10.2836 10.9395 9.93182 10.5889 9.93182 10.1581C9.93182 9.72733 10.2836 9.37674 10.7159 9.37674C11.1482 9.37674 11.5 9.72733 11.5 10.1581C11.5 10.5889 11.1482 10.9395 10.7159 10.9395ZM14.1136 10.1581C14.1136 11.1635 14.9343 11.9814 15.9432 11.9814C16.952 11.9814 17.7727 11.1635 17.7727 10.1581C17.7727 9.15274 16.952 8.33488 15.9432 8.33488C14.9343 8.33488 14.1136 9.15274 14.1136 10.1581ZM16.7273 10.1581C16.7273 10.5889 16.3755 10.9395 15.9432 10.9395C15.5109 10.9395 15.1591 10.5889 15.1591 10.1581C15.1591 9.72733 15.5109 9.37674 15.9432 9.37674C16.3755 9.37674 16.7273 9.72733 16.7273 10.1581ZM10.7159 13.5442C9.70705 13.5442 8.88636 14.362 8.88636 15.3674C8.88636 16.3728 9.70705 17.1907 10.7159 17.1907C11.7248 17.1907 12.5455 16.3728 12.5455 15.3674C12.5455 14.362 11.7248 13.5442 10.7159 13.5442ZM10.7159 16.1488C10.2836 16.1488 9.93182 15.7983 9.93182 15.3674C9.93182 14.9366 10.2836 14.586 10.7159 14.586C11.1482 14.586 11.5 14.9366 11.5 15.3674C11.5 15.7983 11.1482 16.1488 10.7159 16.1488ZM5.48864 13.5442C4.47977 13.5442 3.65909 14.362 3.65909 15.3674C3.65909 16.3728 4.47977 17.1907 5.48864 17.1907C6.4975 17.1907 7.31818 16.3728 7.31818 15.3674C7.31818 14.362 6.4975 13.5442 5.48864 13.5442ZM5.48864 16.1488C5.05634 16.1488 4.70455 15.7983 4.70455 15.3674C4.70455 14.9366 5.05634 14.586 5.48864 14.586C5.92093 14.586 6.27273 14.9366 6.27273 15.3674C6.27273 15.7983 5.92093 16.1488 5.48864 16.1488Z" fill="#799283"/>
                            </svg>
                            Bookings
                        </ListHeaderNavVertical>

                        <ListHeaderNavVertical onClick={() => navigate('/users')}>
                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 17.8953C16 18.5022 15.4906 19 14.8604 19H1.13956C0.512283 19 0 18.504 0 17.8953C0 13.6248 3.58172 10.1628 8 10.1628C12.4183 10.1628 16 13.6248 16 17.8953ZM8 11.4884C4.41564 11.4884 1.49576 14.2382 1.3753 17.6744H14.6247C14.5042 14.2382 11.5844 11.4884 8 11.4884ZM8 9.27907C5.34903 9.27907 3.2 7.20188 3.2 4.63953C3.2 2.07719 5.34903 0 8 0C10.651 0 12.8 2.07719 12.8 4.63953C12.8 7.20188 10.651 9.27907 8 9.27907ZM8 7.95349C9.89355 7.95349 11.4286 6.46978 11.4286 4.63953C11.4286 2.80929 9.89355 1.32558 8 1.32558C6.10645 1.32558 4.57143 2.80929 4.57143 4.63953C4.57143 6.46978 6.10645 7.95349 8 7.95349Z" fill="#799283"/>
                            </svg>
                            Users
                        </ListHeaderNavVertical>

                        <ListHeaderNavVertical onClick={() => navigate('/contact')}>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7095 0.125038V0.126195H12.7084C11.0384 0.126195 9.6845 1.54981 9.6845 3.30545V4.77304L5.33717 4.77188C5.19186 4.77188 5.05316 4.83322 4.94968 4.94086C4.8473 5.0485 4.79005 5.19549 4.79005 5.34827V9.91894L3.39418 9.9201C1.72418 9.91894 0.369141 11.3426 0.369141 13.0994H0.370242C0.369141 14.8551 1.72429 16.2798 3.39415 16.2798H4.79002V20.8505C4.79002 21.0032 4.84727 21.1491 4.94965 21.2579C5.05313 21.3655 5.19183 21.4269 5.33715 21.4269H10.2394C10.5388 21.4234 10.781 21.1664 10.781 20.8505L10.7799 18.8065C10.7799 17.6861 11.6441 16.7776 12.7097 16.7776C13.7753 16.7776 14.6395 17.6861 14.6395 18.8065L14.6384 20.8505C14.6384 21.1641 14.8773 21.4188 15.1745 21.4257H20.0821C20.3848 21.4257 20.6303 21.1676 20.6303 20.8493L20.6292 15.6721C20.616 15.3666 20.376 15.127 20.0821 15.127L18.1391 15.1282C17.0724 15.1282 16.2082 14.2196 16.2082 13.0992C16.2082 11.9788 17.0724 11.0703 18.1391 11.0703L20.0821 11.0714C20.3837 11.0714 20.6292 10.8145 20.6303 10.4973V10.4985V5.34799C20.6303 5.0297 20.3848 4.77276 20.0821 4.77276H15.7348V3.30517C15.7348 1.54822 14.3807 0.124725 12.7097 0.124725V0.125883L12.7095 0.125038ZM12.7095 1.27665C13.7751 1.27665 14.6393 2.18522 14.6393 3.3056L14.6382 5.34842C14.6382 5.65745 14.8694 5.90975 15.1589 5.9248H19.5336V9.91887L18.1388 9.92003C16.4677 9.91888 15.1138 11.3425 15.1138 13.0993C15.1138 14.8551 16.4678 16.2797 18.1388 16.2797H19.5336V20.2738H15.7347V18.8062C15.7347 17.0504 14.3806 15.627 12.7097 15.627H12.7086C11.0386 15.627 9.68464 17.0506 9.68464 18.8062V20.275L5.88573 20.2738V15.68C5.87362 15.3722 5.63364 15.1268 5.33861 15.1268L3.39452 15.1279C2.32891 15.1279 1.46471 14.2194 1.46471 13.099C1.46471 11.9786 2.32888 11.07 3.39452 11.07L5.33861 11.0712C5.63914 11.0712 5.88353 10.82 5.88683 10.5041L5.88573 5.92421H10.2331C10.5358 5.92421 10.7813 5.66611 10.7813 5.34783L10.7802 3.30501C10.7802 2.18466 11.6443 1.27606 12.71 1.27606L12.7095 1.27665Z" fill="#799283"/>
                            </svg>
                            Contact
                        </ListHeaderNavVertical>
                    </UnListContentHeaderNavVertical>
                </div>
                <ContentContactNavVertical>
                    <ImageProfileHeaderNavVertical>
                        <img width='100%' height='100%' src={state.user.photo} alt="Image Profile" />
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