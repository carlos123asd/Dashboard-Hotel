import { setorderby,setfilter } from "../features/filterTopTable/sliceFilterTopTable";
import { Filtername, ContentFilterTop } from "../styles/table/filterTop"
import { useDispatch, useSelector } from 'react-redux'
import filter from '../assets/imgs/filter.svg'
import { useEffect, useState } from "react";

export default function FilterTableTop({title}){
    const dispatch = useDispatch()
    const [show,setShow] = useState({
        display: 'none'
    });
    const filtershow= useSelector(state => state.filterToptable.filter)

    useEffect(() => {
        if(filtershow === true){
            setShow({
                display: 'inline-block'
            })
        }else{
            setShow({
                display: 'none'
            })
        }
    }, [filtershow])

    const handleClickFilter = (filterby) => {
        dispatch(setorderby(filterby))
    }

    const handleClearFilters = () => {
        dispatch(setorderby('All Rooms'))
        dispatch(setfilter(false))
    }

    return <>
        <ContentFilterTop>
            {
                title.map((filtername) => {
                    return <Filtername onClick={() => handleClickFilter(filtername)}>{filtername}</Filtername>
                })
            }
            <img style={show} onClick={handleClearFilters} src={filter} alt="clean filters" />
        </ContentFilterTop>
    </>
} 