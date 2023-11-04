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
        navigate('../TopStories')
    }
    let SourceOptions = (
        <>

        </>
    )
    let CategoryOptions = (
        <>

        </>
    )
    let width = window.innerWidth;
    if (width >= 1250)
        width = 250
    return (
        <div>
            <div id="mySidebar" className={`${styles.sidebar}  `} style={{ width: (navState === true ? width : '0px') }}>
                <i className={`${styles.closebtn}`} onClick={toggleNav}>×</i>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#HomeSidebar" >
                        Home
                    </span>
                </div>
                <br />
                <div className="container">
                    <span data-bs-toggle="collapse" data-bs-target="#TSSidebar" onClick={handleClick} style={{ color: 'pink' }}>
                        TopStories (Here)
                    </span>
                </div>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#SourceSidebar" >
                        Sources
                    </span>
                    {SourceOptions}
                </div>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#CategorySidebar" >
                        Category
                    </span>
                    {CategoryOptions}
                </div>
                <br />
            </div>


            <button id="togglesidebar" className={`${styles.openbtn}`} style={{ display: (navState === true ? 'none' : 'block'), position: 'absolute', top: '0px', left: '0px' }} onClick={toggleNav}>☰</button>
            <div className="container-fluid" style={{ paddingTop: "4rem" }}>
            </div>
        </div >
    )
}
