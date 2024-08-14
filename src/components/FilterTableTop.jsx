import { setorderby } from "../features/filterTopTable/sliceFilterTopTable";
import Filtername from "../styles/table/filterTop"
import { useDispatch } from 'react-redux'

export default function FilterTableTop({title}){
    const dispatch = useDispatch()
    

    const handleClickFilter = (filterby) => {
        dispatch(setorderby(filterby))
    }

    return <>
        <div>
            {
                title.map((filtername) => {
                    return <Filtername onClick={() => handleClickFilter(filtername)}>{filtername}</Filtername>
                })
            }
        </div>
    </>
} 