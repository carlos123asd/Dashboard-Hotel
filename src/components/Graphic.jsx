import {
    Chart,
    Tooltip,
    Interval,
  } from "bizcharts";
import { useSelector } from "react-redux";

export default function Graphic(){

    const selectorDbDataRooms = useSelector(state => state.db.data.rooms);
    const lengthData = selectorDbDataRooms.length
    const promedioBooked = ((((selectorDbDataRooms.filter((room) => {
        return room.status === 'Booked'
    })).length)/lengthData)*100)
    const promedioAvailable = ((((selectorDbDataRooms.filter((room) => {
        return room.status === 'Available'
    })).length)/lengthData)*100)

    const data = [
        { name: 'Booked', total: 'Rooms Booked(%)', promedio: promedioBooked},
        { name: 'Available', total: 'Rooms Booked(%)', promedio: promedioAvailable}
    ];

    return <>
        <Chart height={400} padding="auto" data={data} autoFit>
            <Interval
                adjust={[
                {
                    type: 'dodge',
                    marginRatio: 0,
                },
                ]}
                color="name"
                position="total*promedio"
            />
            <Tooltip shared />
        </Chart>
    </>
}