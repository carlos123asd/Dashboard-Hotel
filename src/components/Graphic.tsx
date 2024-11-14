import { BarChart } from "@tremor/react";
import { appSelector } from "../features/hooks/hooks";

export default function Graphic(){
/*
    const selectorDbDataRooms = appSelector(state => state.dbRoom.data);
    const lengthData = selectorDbDataRooms.length
    const promedioBooked = ((((selectorDbDataRooms.filter((room) => {
        return room.status === 'Booked'
    })).length)/lengthData)*100)
    const promedioAvailable = ((((selectorDbDataRooms.filter((room) => {
        return room.status === 'Available'
    })).length)/lengthData)*100)*/

    const chartdata = [
        {
          date: "Jan 23",
          SolarPanels: 2890,
          Inverters: 2338,
        },
        {
          date: "Feb 23",
          SolarPanels: 2756,
          Inverters: 2103,
        },
        {
          date: "Mar 23",
          SolarPanels: 3322,
          Inverters: 2194,
        },
        {
          date: "Apr 23",
          SolarPanels: 3470,
          Inverters: 2108,
        },
        {
          date: "May 23",
          SolarPanels: 3475,
          Inverters: 1812,
        },
        {
          date: "Jun 23",
          SolarPanels: 3129,
          Inverters: 1726,
        },
        {
          date: "Jul 23",
          SolarPanels: 3490,
          Inverters: 1982,
        },
        {
          date: "Aug 23",
          SolarPanels: 2903,
          Inverters: 2012,
        },
        {
          date: "Sep 23",
          SolarPanels: 2643,
          Inverters: 2342,
        },
        {
          date: "Oct 23",
          SolarPanels: 2837,
          Inverters: 2473,
        },
        {
          date: "Nov 23",
          SolarPanels: 2954,
          Inverters: 3848,
        },
        {
          date: "Dec 23",
          SolarPanels: 3239,
          Inverters: 3736,
        },
      ]
    

      return (
        <BarChart
        className="h-full"
        data={chartdata}
        index="date"
        categories={["SolarPanels", "Inverters"]}
        showLegend={false}
        />
      )
}