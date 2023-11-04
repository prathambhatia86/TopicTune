import { useState,useEffect, useRef } from "react";
import styles from "../css/Home.module.css"
import { useNavigate } from 'react-router-dom'
import FormOptionwa from "./FormOptionwa";
import Card from "./Card";
export default function Home({ source, category, changeSource, changeCategory }) {
    const navigate = useNavigate();
    const [navState, changeNavState] = useState(false);
    const [checkSourceState,changeCheckSourceState]=useState(new Map());
    let SourceOptions=useRef(-1);
    
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

    let sources = [];
    let temp=new Map();
    for (let key in source) {
        temp.set(key,1);
        sources.push(<FormOptionwa text={key} cur={checkSourceState} change={changeCheckSourceState}/>);
    }
    
    useEffect(() => {
        SourceOptions.current=(
            <>
                {sources}
            </>
        )
        changeCheckSourceState(temp);
      }, [source]);
      console.log(checkSourceState);
    let CategoryOptions = (
        <>
            {category.map((obj, i) => {
                console.log(obj);
            })}
        </>
    )
    let width = window.innerWidth;
    if (width >= 1250)
        width = 250
    return (
        <div>
            <div id="mySidebar" className={`${styles.sidebar}  `} style={{ width: (navState === true ? width : '0px') }}>
                <i className={`${styles.closebtn}`} onClick={toggleNav} style={{color:'black'}}>×</i>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#HomeSidebar" style={{ color: 'pink' }}>
                        Home (Here)
                    </span>
                </div>
                <br />
                <div className="container">
                    <span data-bs-toggle="collapse" data-bs-target="#TSSidebar" onClick={handleClick} >
                        TopStories
                    </span>
                </div>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#SourceSidebar" >
                        Sources
                    </span>
                    {SourceOptions.current}
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
            <Card />
        </div >
    )
}
