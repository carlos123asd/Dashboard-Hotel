import { Box, Tab, Tabs } from "@mui/material";
import { setorderby } from "../features/filterTopTable/sliceFilterTopTable";
import { appDispatch } from "../features/hooks/hooks";
import { PropsFilterTableTop } from "../interfaces/InterfacePropsFilterTableTop";
import { Filtername, ContentFilterTop } from "../styles/table/filterTop"
import { useState } from "react";


export default function FilterTableTop(props:PropsFilterTableTop){
    const [activeTab, setActiveTab] = useState(0);
    const {title} = props
    const dispatch = appDispatch()

    const handleClickFilter = (filterby:string) => {
        dispatch(setorderby(filterby))
    }
    const handleChange = (event:any, newValue:any) => {
        setActiveTab(newValue); // Cambiar el tab activo
    };


    return <>
         <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                aria-label="basic tabs example"
            >
                {title.map((filtername, index) => (
                    <Tab
                        key={index}
                        onClick={() => handleClickFilter(filtername)}
                        label={filtername} 
                        sx={{
                            fontFamily: 'poppinsmedium',
                            fontSize: '1rem',
                            textTransform: 'none',
                            fontWeight: activeTab === index ? 'bold' : 'normal',
                            borderBottom: activeTab === index ? '2px solid #1976d2' : 'none',
                            color: activeTab === index ? '#1976d2' : '#6E6E6E',
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    </>
} 