import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Layout from '../styles/layout/Layout'
import NavVertical from '../components/NavVertical'
import { useEffect, useState } from 'react';
import { appSelector } from '../features/hooks/hooks';
import { styleGrid } from '../interfaces/InterfaceStyleGrid';
import Login from './Login';


export default function Dashboard(){
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
    const token_auth = localStorage.getItem('TOKEN_AUTH');
    
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

    
    if(token_auth === null){
        return <>
            <Login />
        </>
    }else{
        return <>
            <Layout style={stylegrid.grid}>
                <Nav stylenav={stylegrid.padding} />
                <NavVertical stylenavvertical={stylegrid.left}/>
                <Outlet />
            </Layout>
        </>
    }
}
