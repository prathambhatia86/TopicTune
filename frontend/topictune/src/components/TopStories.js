import { useState } from "react";
import styles from "../css/Home.module.css"
import { useNavigate } from 'react-router-dom'
export default function TopStories(props) {
    const navigate = useNavigate();
    const [navState, changeNavState] = useState(false);
    const toggleNav = () => {
        changeNavState((prev) => {
            return (!prev);
        });
    }
    const sidebarReset = () => {
        changeNavState(false);
    }
    const handleClick = () => {
        console.log(1);
        navigate('../')
    }
    let width = window.innerWidth;
    if (width >= 1250)
        width = 250
    return (
        <div>
            <div id="mySidebar" className={`${styles.sidebar}  `} style={{ width: (navState === true ? width : '0px') }}>
                <i className={`${styles.closebtn}`} onClick={toggleNav}>×</i>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#driverSidebar" onClick={handleClick}>
                        Home
                    </span>
                    <div className="container-fluid collapse row " id="driverSidebar" style={{ backgroundColor: 'rgb(255, 250, 149)' }}>
                    </div>
                </div>
                <br />
                <div className="container" onClick={handleClick}>
                    <span data-bs-toggle="collapse" data-bs-target="#cabSidebar" style={{ color: 'white' }}>
                        TopStories (Here)
                    </span>
                </div>
                <br />
            </div>


            <button id="togglesidebar" className={`${styles.openbtn}`} style={{ display: (navState === true ? 'none' : 'block'), position: 'absolute', top: '0px', left: '0px' }} onClick={toggleNav}>☰</button>
            <div className="container-fluid" style={{ paddingTop: "4rem" }}>
            </div>
        </div >
    )
}
