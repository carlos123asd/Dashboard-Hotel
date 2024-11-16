import { appDispatch, appSelector } from "../features/hooks/hooks"
import { Card, SparkAreaChart } from "@tremor/react"
import { Contentcalendargrafics } from "../styles/dashboard/Contentcalendargrafics"
import { ContentPageMain } from "../styles/nav/nav"
import { dbThunkBooking } from "../features/db/thunks/dbThunkBooking"
import { dbThunkRoom } from "../features/db/thunks/dbThunkRoom"
import { KpiDashboard } from '../styles/dashboard/dashboards'
import { useEffect, useState } from "react"
import Calendar from "../components/Calendar"
import DonutChart from "../components/DonutChart"
import Graphic from "../components/Graphic"
import Review from "../components/Review"

const chartdata = [
    {
      month: "Jan 21",
      Performance: 4000,
    },
    {
      month: "Feb 21",
      Performance: 3000,
    },
    {
      month: "Mar 21",
      Performance: 2000,
    },
    {
      month: "Apr 21",
      Performance: 2780,
    },
    {
      month: "May 21",
      Performance: 1890,
    },
    {
      month: "Jun 21",
      Performance: 2390,
    },
    {
      month: "Jul 21",
      Performance: 3490,
    },
  ]
  
export default function Main(){
    const dispatch = appDispatch()
    const stateDbStatusBooking = appSelector(state => state.dbBooking.status)
    const stateDbStatusRoom = appSelector(state => state.dbRoom.status)
    const selectorDbErrorBooking = appSelector(state => state.dbBooking.error)
    const selectorDbErrorRoom = appSelector(state => state.dbRoom.error)
    const stateDbDataBooking = appSelector(state => state.dbBooking.data)
    const stateDbDataRoom = appSelector(state => state.dbRoom.data)
    const [loading,setLoading] = useState<boolean>(true)
    const monthActual = new Date().toLocaleString("en-GB",{month:"long"})

    useEffect(() =>{
        if(stateDbStatusBooking === 'idle' && stateDbStatusRoom === 'idle'){
            dispatch(dbThunkRoom());
            dispatch(dbThunkBooking());
        }else if(stateDbStatusBooking === 'fulfilled' && stateDbStatusRoom === 'fulfilled'){
            setLoading(false);
        }else if(stateDbStatusBooking === 'rejected' || stateDbStatusRoom === 'rejected'){
            if(stateDbStatusBooking === 'rejected'){
                console.error(selectorDbErrorBooking)
            }
            if(stateDbStatusRoom === 'rejected'){
                console.error(selectorDbErrorRoom)
            }
        }
    },[stateDbStatusBooking,stateDbStatusRoom])
    
    if(loading === true){
        return <>
            <h1>Loading...</h1>
        </>
    }else{
        return <>
            <ContentPageMain>
                <div className="parent">
                    <div className="div1">
                        <Card className="mx-auto w-full h-25 px-7 py-7 bg-white border-1 hover:shadow-lg hover:scale-105 rounded-lg transition-all content-evenly cursor-pointer">
                            <div className="h-full flex flex-col justify-center gap-10">
                                <div className="flex items-center">
                                    <div className='kpicontent__img kpicontent--purple'>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.3777 7.67708V4.58321C19.3759 2.51342 17.9457 0.83521 16.1818 0.833344H4.81813C3.05411 0.835427 1.62382 2.51356 1.62223 4.58321V7.67708C0.975907 8.00833 0.557771 8.75625 0.556885 9.58332V18.75C0.556885 18.8604 0.594171 18.9666 0.660755 19.0448C0.727339 19.1229 0.817894 19.1667 0.912005 19.1667H3.04269C3.13679 19.1667 3.22735 19.1229 3.29394 19.0448C3.36053 18.9667 3.39781 18.8604 3.39781 18.75V16.6666H17.6024V18.75C17.6024 18.8604 17.6396 18.9666 17.7062 19.0448C17.7728 19.1229 17.8634 19.1667 17.9575 19.1667H20.0882C20.1823 19.1667 20.2728 19.1229 20.3394 19.0448C20.406 18.9667 20.4433 18.8604 20.4433 18.75V9.58332C20.4424 8.75622 20.0242 8.00833 19.3779 7.67708H19.3777ZM3.04245 15.8333H1.26688V14.1667H19.7328V15.8333H3.04245ZM2.33223 7.50001V4.58321C2.334 2.97278 3.4455 1.66854 4.81813 1.66641H16.1818C17.5543 1.66849 18.6659 2.97265 18.6677 4.58321V7.50001H17.2472V6.25001C17.2463 5.56044 16.7696 5.00105 16.1819 5.00001H13.341C12.7533 5.00105 12.2765 5.56044 12.2756 6.25001V7.50001H8.7245V6.25001C8.72361 5.56044 8.24686 5.00105 7.65916 5.00001H4.81825C4.23054 5.00105 3.75379 5.56044 3.75291 6.25001V7.50001H2.33223ZM16.5368 7.50001H12.9856V6.25001C12.9856 6.0198 13.1445 5.83334 13.3407 5.83334H16.1817C16.3779 5.83334 16.5368 6.0198 16.5368 6.25001V7.50001ZM8.01404 7.50001H4.46291V6.25001C4.46291 6.0198 4.62182 5.83334 4.81802 5.83334H7.65893C7.85513 5.83334 8.01404 6.0198 8.01404 6.25001V7.50001ZM1.26677 9.58334C1.26766 8.89377 1.74441 8.33438 2.33211 8.33334H18.6673C19.255 8.33438 19.7318 8.89377 19.7327 9.58334V13.3332H1.26677V9.58334ZM2.68723 18.3332H1.26677V16.6665H2.68723V18.3332ZM19.7327 18.3332H18.3122V16.6665H19.7327V18.3332Z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    <div className="flex-column items-center space-x-2.5">
                                        <p className="font-titDashboard ml-2.5 text-gray-700 dark:text-gray-300 text-2xl">{monthActual}</p>
                                        <span className="font-subTitDashboard text-sm text-gray-500 dark:text-gray-500 text-xl">
                                            New Bookings
                                        </span>
                                    </div>
                                </div>
                                <SparkAreaChart
                                    data={chartdata}
                                    categories={["Performance"]}
                                    index={"month"}
                                    colors={["violet"]}
                                    className="h-20 w-full mt-7"
                                />
                                <div className="flex items-center space-x-2.5 mt-3 place-content-between">
                                    <div>
                                        <span className="font-numeros text-gray-700 dark:text-gray-300 text-5xl">
                                            {stateDbDataBooking.length}
                                        </span>
                                        <span className="font-titDashboard">
                                            Rooms
                                        </span>
                                    </div>
                                    <span className="rounded bg-green-400 px-2 py-1 text-lg font-medium text-white">
                                        +1.72%
                                    </span>
                                </div>
                            </div>
                        </Card>
                        <Card className="mx-auto w-full flex-1 items-center justify-between px-7 py-7 bg-white border-1 hover:shadow-lg hover:scale-105 rounded-lg transition-all cursor-pointer">
                            <div className="h-full flex flex-col justify-center gap-10">
                                <div className="flex items-center">
                                    <div className='kpicontent__img kpicontent--greenv2'>
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3795 12.805C17.2102 12.805 16.0408 13.2494 15.1485 14.1391C13.3639 15.9176 13.3639 18.8009 15.1485 20.5794C16.0408 21.4686 17.2102 21.9135 18.3795 21.9135C19.5494 21.9135 20.7187 21.4686 21.611 20.5794C23.3956 18.8009 23.3956 15.9176 21.611 14.1391C20.7187 13.2499 19.5494 12.805 18.3795 12.805ZM20.8719 19.8428C20.2064 20.5059 19.3209 20.8716 18.3795 20.8716C17.4386 20.8716 16.5531 20.5059 15.8877 19.8428C14.5134 18.4733 14.5134 16.2453 15.8877 14.8757C16.5531 14.2121 17.4386 13.8469 18.3795 13.8469C19.3209 13.8469 20.2064 14.2121 20.8719 14.8757C21.5373 15.5389 21.9043 16.4208 21.9043 17.359C21.9043 18.2972 21.5373 19.1797 20.8719 19.8428ZM19.8636 16.6698H18.8182V15.6279C18.8182 15.3404 18.584 15.107 18.2955 15.107C18.0069 15.107 17.7727 15.3404 17.7727 15.6279V17.1907C17.7727 17.4783 18.0069 17.7116 18.2955 17.7116H19.8636C20.1522 17.7116 20.3864 17.4783 20.3864 17.1907C20.3864 16.9031 20.1522 16.6698 19.8636 16.6698ZM12.5455 20.3163C12.5574 20.3163 12.0465 20.3159 12.0582 20.3151C12.3302 20.2969 12.5455 20.071 12.5455 19.7953C12.5455 19.5078 12.3113 19.2744 12.0227 19.2744H2.09091C1.51434 19.2744 1.04545 18.8071 1.04545 18.2326V7.29302H20.3864V10.9395C20.3864 11.2271 20.6205 11.4605 20.9091 11.4605C21.1976 11.4605 21.4318 11.2271 21.4318 10.9395V4.16744C21.4318 3.01827 20.494 2.08372 19.3409 2.08372H17.25V1.82326C17.25 0.81786 16.4293 0 15.4205 0C14.4116 0 13.5909 0.81786 13.5909 1.82326V2.08372H8.36364V1.82326C8.36364 0.81786 7.54295 0 6.53409 0C5.52523 0 4.70455 0.81786 4.70455 1.82326V2.08372H2.09091C0.937773 2.08372 0 3.01827 0 4.16744V18.2326C0 19.3817 0.937773 20.3163 2.09091 20.3163H12.5455ZM1.04545 4.16744C1.04545 3.59286 1.51434 3.12558 2.09091 3.12558H4.70455V3.38605C4.70455 4.39144 5.52523 5.2093 6.53409 5.2093C7.54295 5.2093 8.36364 4.39144 8.36364 3.38605V3.12558H13.5909V3.38605C13.5909 4.39144 14.4116 5.2093 15.4205 5.2093C16.4293 5.2093 17.25 4.39144 17.25 3.38605V3.12558H19.3409C19.9175 3.12558 20.3864 3.59286 20.3864 4.16744V6.25116H1.04545V4.16744ZM5.75 1.82326C5.75 1.39245 6.1018 1.04186 6.53409 1.04186C6.96639 1.04186 7.31818 1.39245 7.31818 1.82326V3.38605C7.31818 3.81686 6.96639 4.16744 6.53409 4.16744C6.1018 4.16744 5.75 3.81686 5.75 3.38605V1.82326ZM14.6364 1.82326C14.6364 1.39245 14.9882 1.04186 15.4205 1.04186C15.8527 1.04186 16.2045 1.39245 16.2045 1.82326V3.38605C16.2045 3.81686 15.8527 4.16744 15.4205 4.16744C14.9882 4.16744 14.6364 3.81686 14.6364 3.38605V1.82326ZM5.48864 8.33488C4.47977 8.33488 3.65909 9.15274 3.65909 10.1581C3.65909 11.1635 4.47977 11.9814 5.48864 11.9814C6.4975 11.9814 7.31818 11.1635 7.31818 10.1581C7.31818 9.15274 6.4975 8.33488 5.48864 8.33488ZM5.48864 10.9395C5.05634 10.9395 4.70455 10.5889 4.70455 10.1581C4.70455 9.72733 5.05634 9.37674 5.48864 9.37674C5.92093 9.37674 6.27273 9.72733 6.27273 10.1581C6.27273 10.5889 5.92093 10.9395 5.48864 10.9395ZM10.7159 8.33488C9.70705 8.33488 8.88636 9.15274 8.88636 10.1581C8.88636 11.1635 9.70705 11.9814 10.7159 11.9814C11.7248 11.9814 12.5455 11.1635 12.5455 10.1581C12.5455 9.15274 11.7248 8.33488 10.7159 8.33488ZM10.7159 10.9395C10.2836 10.9395 9.93182 10.5889 9.93182 10.1581C9.93182 9.72733 10.2836 9.37674 10.7159 9.37674C11.1482 9.37674 11.5 9.72733 11.5 10.1581C11.5 10.5889 11.1482 10.9395 10.7159 10.9395ZM14.1136 10.1581C14.1136 11.1635 14.9343 11.9814 15.9432 11.9814C16.952 11.9814 17.7727 11.1635 17.7727 10.1581C17.7727 9.15274 16.952 8.33488 15.9432 8.33488C14.9343 8.33488 14.1136 9.15274 14.1136 10.1581ZM16.7273 10.1581C16.7273 10.5889 16.3755 10.9395 15.9432 10.9395C15.5109 10.9395 15.1591 10.5889 15.1591 10.1581C15.1591 9.72733 15.5109 9.37674 15.9432 9.37674C16.3755 9.37674 16.7273 9.72733 16.7273 10.1581ZM10.7159 13.5442C9.70705 13.5442 8.88636 14.362 8.88636 15.3674C8.88636 16.3728 9.70705 17.1907 10.7159 17.1907C11.7248 17.1907 12.5455 16.3728 12.5455 15.3674C12.5455 14.362 11.7248 13.5442 10.7159 13.5442ZM10.7159 16.1488C10.2836 16.1488 9.93182 15.7983 9.93182 15.3674C9.93182 14.9366 10.2836 14.586 10.7159 14.586C11.1482 14.586 11.5 14.9366 11.5 15.3674C11.5 15.7983 11.1482 16.1488 10.7159 16.1488ZM5.48864 13.5442C4.47977 13.5442 3.65909 14.362 3.65909 15.3674C3.65909 16.3728 4.47977 17.1907 5.48864 17.1907C6.4975 17.1907 7.31818 16.3728 7.31818 15.3674C7.31818 14.362 6.4975 13.5442 5.48864 13.5442ZM5.48864 16.1488C5.05634 16.1488 4.70455 15.7983 4.70455 15.3674C4.70455 14.9366 5.05634 14.586 5.48864 14.586C5.92093 14.586 6.27273 14.9366 6.27273 15.3674C6.27273 15.7983 5.92093 16.1488 5.48864 16.1488Z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    <div className="flex-column items-center space-x-2.5">
                                        <p className="font-titDashboard ml-2.5 text-gray-700 dark:text-gray-300 text-2xl">{monthActual}</p>
                                        <span className="font-subTitDashboard text-sm text-gray-500 dark:text-gray-500 text-xl">
                                            Bookeds Rooms
                                        </span>
                                    </div>
                                </div>
                                <SparkAreaChart
                                    data={chartdata}
                                    categories={["Performance"]}
                                    index={"month"}
                                    colors={["teal"]}
                                    className="h-20 w-full mt-7"
                                />
                                <div className="flex items-center space-x-2.5 mt-3 place-content-between">
                                    <div>
                                        <span className="font-numeros text-gray-700 dark:text-gray-300 text-5xl">
                                            {stateDbDataBooking.length}
                                        </span>
                                        <span className="font-titDashboard">
                                            Rooms
                                        </span>
                                    </div>
                                    <span className="rounded bg-yellow-400 px-2 py-1 text-lg font-medium text-white">
                                        -1.72%
                                    </span>
                                </div>
                            </div>
                        </Card>
                        <Card className="mx-auto w-full flex-1 items-center px-7 py-7 bg-white border-1 hover:shadow-lg hover:scale-105 rounded-lg transition-all mt-5 cursor-pointer">
                            <div className="h-full flex flex-col justify-center gap-10">
                                <div className="flex items-center">
                                    <div className='kpicontent__img kpicontent--green'>
                                        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.1446 5.77351C14.8885 5.50137 14.547 5.35506 14.1952 5.36676C13.8434 5.37846 13.5101 5.54721 13.2687 5.83589C13.0273 6.12458 12.8975 6.50955 12.9079 6.90611C12.9183 7.30267 13.068 7.67834 13.3241 7.95048L14.9596 9.68958H7.20463C6.85804 9.69848 6.52831 9.85993 6.28597 10.1394C6.04364 10.4189 5.90796 10.7941 5.90796 11.1849C5.90796 11.5757 6.04364 11.951 6.28597 12.2305C6.52831 12.51 6.85804 12.6714 7.20463 12.6803H14.9596L13.3241 14.4225C13.0682 14.6949 12.9187 15.0706 12.9086 15.4672C12.8985 15.8638 13.0285 16.2486 13.2701 16.5371C13.5117 16.8256 13.8451 16.9941 14.1968 17.0055C14.5486 17.0169 14.89 16.8703 15.1459 16.5979L19.2125 12.2703C19.3434 12.1304 19.4477 11.9618 19.5189 11.7749C19.5902 11.5881 19.6269 11.3868 19.6269 11.1834C19.6269 10.98 19.5902 10.7787 19.5189 10.5919C19.4477 10.405 19.3434 10.2364 19.2125 10.0965L15.1446 5.77351Z" fill="#fff"/>
                                            <path d="M9.00795 19.0562H3.01776V3.31365H9.00795C9.35968 3.31365 9.697 3.15614 9.94571 2.87578C10.1944 2.59542 10.3341 2.21517 10.3341 1.81868C10.3341 1.42218 10.1944 1.04193 9.94571 0.761568C9.697 0.481206 9.35968 0.3237 9.00795 0.3237H1.69089C1.33909 0.32411 1.00181 0.481829 0.753048 0.762248C0.50429 1.04267 0.364378 1.42288 0.364014 1.81945V20.5512C0.36456 20.9476 0.504552 21.3277 0.753291 21.6079C1.00203 21.8882 1.33921 22.0458 1.69089 22.0462H9.00795C9.35968 22.0462 9.697 21.8887 9.94571 21.6083C10.1944 21.3279 10.3341 20.9477 10.3341 20.5512C10.3341 20.1547 10.1944 19.7745 9.94571 19.4941C9.697 19.2137 9.35968 19.0562 9.00795 19.0562Z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    <div className="flex-column items-center space-x-2.5">
                                        <p className="font-titDashboard ml-2.5 text-gray-700 dark:text-gray-300 text-2xl">Today</p>
                                        <span className="font-subTitDashboard text-sm text-gray-500 dark:text-gray-500 text-xl">
                                            Check In
                                        </span>
                                    </div>
                                </div>
                                <SparkAreaChart
                                    data={chartdata}
                                    categories={["Performance"]}
                                    index={"month"}
                                    colors={["green"]}
                                    className="h-20 w-full mt-7"
                                />
                                <div className="flex items-center space-x-2.5 mt-3 place-content-between">
                                    <div>
                                        <span className="font-numeros text-gray-700 dark:text-gray-300 text-5xl">
                                            {stateDbDataBooking.length}
                                        </span>
                                        <span className="font-titDashboard">
                                            Rooms
                                        </span>
                                    </div>
                                    <span className="rounded bg-emerald-500 px-2 py-1 text-lg font-medium text-white">
                                        +1.72%
                                    </span>
                                </div>
                            </div>
                        </Card>
                        <Card className="mx-auto w-full flex-1 items-center px-7 py-7 bg-white border-1 hover:shadow-lg hover:scale-105 rounded-lg transition-all mt-5 cursor-pointer">
                            <div className="h-full flex flex-col justify-center gap-10">
                                <div className="flex items-center">
                                    <div className='kpicontent__img kpicontent--yellow'>
                                        <svg className='kpicontent__img__deg' width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.1446 5.77351C14.8885 5.50137 14.547 5.35506 14.1952 5.36676C13.8434 5.37846 13.5101 5.54721 13.2687 5.83589C13.0273 6.12458 12.8975 6.50955 12.9079 6.90611C12.9183 7.30267 13.068 7.67834 13.3241 7.95048L14.9596 9.68958H7.20463C6.85804 9.69848 6.52831 9.85993 6.28597 10.1394C6.04364 10.4189 5.90796 10.7941 5.90796 11.1849C5.90796 11.5757 6.04364 11.951 6.28597 12.2305C6.52831 12.51 6.85804 12.6714 7.20463 12.6803H14.9596L13.3241 14.4225C13.0682 14.6949 12.9187 15.0706 12.9086 15.4672C12.8985 15.8638 13.0285 16.2486 13.2701 16.5371C13.5117 16.8256 13.8451 16.9941 14.1968 17.0055C14.5486 17.0169 14.89 16.8703 15.1459 16.5979L19.2125 12.2703C19.3434 12.1304 19.4477 11.9618 19.5189 11.7749C19.5902 11.5881 19.6269 11.3868 19.6269 11.1834C19.6269 10.98 19.5902 10.7787 19.5189 10.5919C19.4477 10.405 19.3434 10.2364 19.2125 10.0965L15.1446 5.77351Z" fill="#fff"/>
                                            <path d="M9.00795 19.0562H3.01776V3.31365H9.00795C9.35968 3.31365 9.697 3.15614 9.94571 2.87578C10.1944 2.59542 10.3341 2.21517 10.3341 1.81868C10.3341 1.42218 10.1944 1.04193 9.94571 0.761568C9.697 0.481206 9.35968 0.3237 9.00795 0.3237H1.69089C1.33909 0.32411 1.00181 0.481829 0.753048 0.762248C0.50429 1.04267 0.364378 1.42288 0.364014 1.81945V20.5512C0.36456 20.9476 0.504552 21.3277 0.753291 21.6079C1.00203 21.8882 1.33921 22.0458 1.69089 22.0462H9.00795C9.35968 22.0462 9.697 21.8887 9.94571 21.6083C10.1944 21.3279 10.3341 20.9477 10.3341 20.5512C10.3341 20.1547 10.1944 19.7745 9.94571 19.4941C9.697 19.2137 9.35968 19.0562 9.00795 19.0562Z" fill="#fff"/>
                                        </svg>
                                    </div>
                                    <div className="flex-column items-center space-x-2.5">
                                        <p className="font-titDashboard ml-2.5 text-gray-700 dark:text-gray-300 text-2xl">Today</p>
                                        <span className="font-subTitDashboard text-sm text-gray-500 dark:text-gray-500 text-xl">
                                            Check Out
                                        </span>
                                    </div>
                                </div>
                                <SparkAreaChart
                                    data={chartdata}
                                    categories={["Performance"]}
                                    index={"month"}
                                    colors={["yellow"]}
                                    className="h-20 w-full mt-7"
                                />
                                <div className="flex items-center space-x-2.5 mt-3 place-content-between">
                                    <div>
                                        <span className="font-numeros text-gray-700 dark:text-gray-300 text-5xl">
                                            {stateDbDataBooking.length}
                                        </span>
                                        <span className="font-titDashboard">
                                            Rooms
                                        </span>
                                    </div>
                                    <span className="rounded bg-emerald-500 px-2 py-1 text-lg font-medium text-white">
                                        +1.72%
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="div2">
                        <Card className="mx-auto h-max w-full flex flex-col items-center gap-10 bg-gradient-to-br from-teal-400 to-green-500 hover:shadow-lg hover:scale-105 transition-all justify-center">
                            <div style={{padding:"5%"}}>
                                <h2 className="font-titDashboard text-4xl text-white text-left leading-tight">Analysis of Underperforming Rooms</h2>
                                <p className="font-subTitDashboard text-2xl mt-8 text-white p-1 leading-tight">Identify and analyze the 5 rooms that need a marketing boost. Review their popularity and booking indexes to improve performance and increase occupancy.</p>
                                <div className="w-4/5 font-titDashboard bg-teal-600 font-black text-center rounded-full p-3 pt-6 pb-6 text-white text-xl cursor-pointer" style={{margin:"0 auto",marginTop:"10%"}}>View Details</div>
                            </div>
                        </Card>
                        <div className="h-full">
                            <Calendar />
                        </div>
                    </div>
                    <div className="div3">
                        <DonutChart />
                        <div className="div7">
                            <Graphic />
                        </div>
                    </div>
                    <div className="div4">
                        <Graphic />
                    </div>
                    <div className="div5">
                        <Review />
                    </div>
                </div>
            </ContentPageMain>
        </>
    }  
}
