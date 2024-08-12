import Filtername from "../styles/table/filterTop"

export default function FilterTableTop({title}){
    return <>
        <div>
            {
                title.map((filtername) => {
                    return <Filtername>{filtername}</Filtername>
                })
            }
        </div>
    </>
} 