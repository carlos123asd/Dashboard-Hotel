import { TableObj, TrMainTable, ContentTable, PaginationTable } from "../styles/table/table"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";

import more from '../assets/imgs/more.svg'

export default function Table({columns,data}){
    const [nextdate,setNextdate] = useState(10);
    const [actualdate,setActualdate] = useState(0);
    const [lengthdate,setLengthdate] = useState(Math.trunc(data.length / 10));
    let i = 0
    const nextPaginationData = () => {
        if(nextdate <= data.length){
            setActualdate(actualdate+10);
            setNextdate(nextdate+10);
        }
    }
    const backPaginationData = () => {
        if(actualdate <= data.length && actualdate > 0){
            setActualdate(actualdate-10);
            setNextdate(nextdate-10);
        }
    }
    const numPickedPaginationData = (num) => {
        setActualdate((num * 10) - 10);
        setNextdate(num * 10);
    }
    return <>
        <ContentTable>
            {
                <TableObj>
                    <TrMainTable>
                        {
                            columns.map(column => {
                                return <>
                                    <th className="headercolumn">{column}</th>
                                </>
                            })
                        }
                    </TrMainTable>
                    
                    {data.slice(actualdate,nextdate).map(room => {
                        return <>  
                            <TrMainTable>
                                <div>
                                    <td>
                                        <img className="imgroomnameColum" width={150} height={77} src={room.photo[0]} alt="Image Room" />
                                        <div className="roomnameColumn">
                                            <span className="numtit">{`#000${room.idRoom}`}</span>
                                            <span className="deluxenum">{`${room.typeRoom}-${room.roomNumber}`}</span>
                                        </div>
                                    </td>
                                </div>
                                <td>{room.typeRoom}</td>
                                <td>Floor A-1</td>
                                <td>{room.amenities}</td>
                                <td>{room.price}<span className="nightroom"> /night</span></td>
                                <td>{`$${(parseInt(room.price.slice(1))-((parseInt(room.price.slice(1))*room.discount)/100)).toFixed(2)}(${((parseInt(room.price.slice(1))*room.discount)/100)}%)`}</td>
                                <td>{room.status === 'Available' ? <div className="status">Available</div> : <div className="status statusbooked">Booked</div>}</td>
                                <td><img width={6} src={more} alt="more actions" /></td>
                            </TrMainTable>
                        </>
                    })}
                </TableObj>
            }
        </ContentTable>
        <PaginationTable>
            <div onClick={backPaginationData}>Prev</div>
            {
                data.slice(0,lengthdate).map(element => {
                    i++
                    return <>
                        <div valuepagination={i} onClick={(event) => numPickedPaginationData(event.currentTarget.getAttribute('valuepagination'))} className="numpaginationtable">{i}</div>
                    </>
                })
            }
            <div onClick={nextPaginationData}>Next</div>
        </PaginationTable>
    </>
} 


/* <Swiper
                    pagination={{
                    type: 'fraction',
                    }}
                    modules={[Pagination, Navigation]}
                    className="TableRoom"
                    slidesPerView={10}
                    //spaceBetween={40}
                    navigation={{ 
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                }}
                    >*/

                    /*<div className="swiper-button-prev btnnextswiperReview"><img src={next} width={24} height={'100%'} alt="Next Element" /></div>
                            <div className="swiper-button-next btnnextswiperReview"><img src={back} width={24} height={'100%'} alt="Back Element" /></div>*/