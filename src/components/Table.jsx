import { TrMainTable } from "../styles/table/table"

export default function Table({columns,data}){
    return <>
        <table>
                {
                    columns.map(column => {
                        return <>
                            <TrMainTable>
                                <th className="headercolumn">{column}</th>
                            </TrMainTable>
                        </>
                    })
                }
                {
                    data.map(room => {
                        return <>
                            <TrMainTable>
                                <td><img width={150} height={77} src={room.photo[0]} alt="Image Room" /></td>
                                <td>
                                    <span className="numtit">{`#000${room.idRoom}`}</span>
                                    <span className="deluxenum">{`Deluxe A-${room.roomNumber}`}</span>
                                </td>
                                <td>Floor A-1</td>
                                <td>{room.amenities}</td>
                                <td>{room.price}<span className="nightroom"> /night</span></td>
                                <td>{`$${parseInt(room.price.slice(1))-((parseInt(room.price.slice(1))*room.discount)/100)}`}</td>
                                <td>{room.status === 'Available' ? <div className="status">Available</div> : <div className="status statusbooked">Booked</div>}</td>
                            </TrMainTable>
                        </>
                    })
                }
        </table>
    </>
} 