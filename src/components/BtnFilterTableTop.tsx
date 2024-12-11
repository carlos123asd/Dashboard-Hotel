import { useState } from "react";

export default function BtnFilterTableTop({
    click,
}: {
    click: () => void;
}) {
    const [rotate,setRotate] = useState<object>({});
    const [state,setState] = useState<boolean>(false);
    const rotateiconOrderBy = (order:boolean) =>{
        if(order === true){
            setRotate({
                transform: 'rotate(45deg)',
                verticalAlign: 'text-top'
            })
        }else{
            setRotate({
                transform: 'rotate(224deg)',
                verticalAlign: 'sub'
            })
        }
    }
    return <>
        <span style={rotate} onClick={() => {
            click()
            state ? setState(!state) : setState(!state)
            rotateiconOrderBy(state)
        }} className="filtercolumn"></span>
    </>
}