import { setorderby } from "../features/filterTopTable/sliceFilterTopTable";
import { appDispatch } from "../features/hooks/hooks";
import { PropsFilterTableTop } from "../interfaces/InterfacePropsFilterTableTop";
import { Filtername, ContentFilterTop } from "../styles/table/filterTop"


export default function FilterTableTop(props:PropsFilterTableTop){
    const {title} = props
    const dispatch = appDispatch()

    const handleClickFilter = (filterby:string) => {
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