import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Layout from '../styles/layout/Layout'
import NavVertical from '../components/NavVertical'

export default function Dashboard(){
    return <>
        <Layout>
            <Nav/>
            <NavVertical />
            <Outlet />
        </Layout>
    </>
}