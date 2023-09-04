import NavMenu from "../NavMenu/NavMenu"
import { Outlet } from "react-router-dom"
import './Root.scss'



export default function Root() {
    return (
        <div id='rootMain'>
            <NavMenu />
            <div id="rootDetail">
                <Outlet />
            </div>


        </div>
    )
}