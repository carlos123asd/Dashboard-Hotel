import Nav from '../components/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Layout from '../styles/layout/Layout'
import NavVertical from '../components/NavVertical'
import { useEffect, useState } from 'react';
import { dbThunk } from '../features/db/dbThunk';
import { appDispatch, appSelector } from '../features/hooks/hooks';
import { styleGrid } from '../interfaces/InterfaceStyleGrid';


export default function Dashboard(){

    const stateDbStatus = appSelector(state => state.db.status);
    const selectorDbError = appSelector(state => state.db.error);
    const [loading,setLoading] = useState(true);
    const dispatch = appDispatch()
    const navigate = useNavigate()
    const selectorMenuDisplay = appSelector(state => state.menuSlice.show)
    const [stylegrid,setStylegrid] = useState<styleGrid>({
        grid: {
            transition: 'grid-template-columns .6s',
            gridTemplateColumns: '25% 75%' 
        },
        left: {
            transition: 'left .8s',
            left: '0%'
        },
        padding: {
            transition: 'padding-left .3s',
            paddingLeft:'calc(25% + 2.563em)'
        }
    })
    const selectordb = appSelector(state => state.db.data)

    useEffect(() =>{
        if(stateDbStatus === 'idle'){
            dispatch(dbThunk("init"));
        }else if(stateDbStatus === 'fulfilled'){
            setLoading(false);
            console.log('DATOS', selectordb)
        }else if(stateDbStatus === 'rejected'){
            console.log(selectorDbError)
        }
    },[stateDbStatus])

    useEffect(() => {
        if(selectorMenuDisplay === true){
            setStylegrid({
                grid: {
                    transition: 'grid-template-columns .6s',
                    gridTemplateColumns: '0% 100%' 
                },
                left: {
                    transition: 'left .8s',
                    left: '-60%'
                },
                padding: {
                    transition: 'padding-left .6s',
                    paddingLeft:'5em'
                }
            })
        }else{
            setStylegrid({
                grid: {
                    transition: 'grid-template-columns .6s',
                    gridTemplateColumns: '25% 75%' 
                },
                left: {
                    transition: 'left .8s',
                    left: '0%'
                },
                padding: {
                    transition: 'padding-left .3s',
                    paddingLeft:'calc(25% + 2.563em)'
                }
            })
        }
      },[selectorMenuDisplay])

    if(loading === false){
        return <>
            <Layout style={stylegrid.grid}>
                <Nav stylenav={stylegrid.padding} />
                <NavVertical stylenavvertical={stylegrid.left}/>
                <Outlet />
            </Layout>
        </>
    }else{
        <h1>Loading...</h1>
    }
}