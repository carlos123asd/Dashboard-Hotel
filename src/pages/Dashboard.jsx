import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Layout from '../styles/layout/Layout'
import NavVertical from '../components/NavVertical'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { dbThunk } from '../features/db/dbThunk';
import { useContextAuth } from '../features/context/AuthContext';

export default function Dashboard(){

    const stateDbStatus = useSelector(state => state.db.status);
    const selectorDbData = useSelector(state => state.db.data);
    const selectorDbError = useSelector(state => state.db.error);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch()

    const authcontext = useContextAuth()
    console.log(authcontext)
    
    useEffect(() =>{
        if(stateDbStatus === 'idle'){
            dispatch(dbThunk());
        }else if(stateDbStatus === 'fulfilled'){
            setLoading(false);
        }else if(stateDbStatus === 'rejected'){
            console.log(selectorDbError)
        }
    },[stateDbStatus])


    console.log(selectorDbData)

    if(loading === false){
        return <>
            <Layout>
                <Nav/>
                <NavVertical />
                <Outlet />
            </Layout>
        </>
    }else{
        <h1>Loading...</h1>
    }
}