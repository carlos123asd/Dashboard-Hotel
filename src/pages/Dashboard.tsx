import Nav from '../components/Nav'
import { Outlet, redirect, useNavigate } from 'react-router-dom'
import Layout from '../styles/layout/Layout'
import NavVertical from '../components/NavVertical'
import { useEffect, useState } from 'react';
import { appSelector } from '../features/hooks/hooks';
import { styleGrid } from '../interfaces/InterfaceStyleGrid';
import Login from './Login';
import { WaveSpinner } from "react-spinners-kit";
import logo from "../assets/imgs/menu/logo.svg";
import Loading from '../styles/loading/Loading';
import { useContextAuth } from '../features/context/AuthContext';


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
    const [loading,setLoading] = useState(true);
    const {state}:any = useContextAuth();
    const navigate = useNavigate();
    
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

    console.log(state.user)
    if(token_auth === null || Object.keys(state.user).length === 0){
        navigate('/login')
    }else{
        setTimeout(() => {
            setLoading(false);
        },4000)
       return (loading) ?
            <>
                <Loading>
                    <img width={200} height={200} src={logo} alt="logo Hotel" />
                    <WaveSpinner size={50} color="#fff" loading={loading} />
                </Loading>
            </>
        :
            <>
                <Layout style={stylegrid.grid}>
                    <Nav stylenav={stylegrid.padding} />
                    <NavVertical stylenavvertical={stylegrid.left}/>
                    <Outlet />
                </Layout>
            </>
    }
}
