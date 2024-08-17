import { setorderby } from "../features/filterTopTable/sliceFilterTopTable";
import { Filtername, ContentFilterTop } from "../styles/table/filterTop"
import { useDispatch } from 'react-redux'

export default function FilterTableTop({title}){
    const dispatch = useDispatch()

    const handleClickFilter = (filterby) => {
        dispatch(setorderby(filterby))
    }

    return <>
        <ContentFilterTop>
            {
                title.map((filtername) => {
                    return <Filtername onClick={() => handleClickFilter(filtername)}>{filtername}</Filtername>
                })
            }
        </ContentFilterTop>
    </>
} 