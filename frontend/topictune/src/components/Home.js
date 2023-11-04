import { useState, useEffect, useRef, createFactory } from "react";
import styles from "../css/Home.module.css"
import { useNavigate } from 'react-router-dom'
import FormOptionwa from "./FormOptionwa";
import Exclusion from "./Exclusion";
import Card from "./CardGrid";
export default function Home({ source, category, changeSource, changeCategory }) {
    const navigate = useNavigate();
    const [navState, changeNavState] = useState(false);
    const [checkSourceState, changeCheckSourceState] = useState(new Map());
    let SourceOptions = useRef(-1);
    let CategoryOptions = useRef(-1);
    let temp = useRef(new Map());
    let temp2 = useRef(new Map());

    let ExclusionOptions = useRef(-1);
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
    const changeExclusion = (temp) => {
        ExclusionOptions.current = temp;
    };
    let sources = [];
    for (let key in source) {
        temp.current.set(key, 1);
        sources.push(<FormOptionwa text={key} cur={temp} change={changeCheckSourceState} key={key} />);
    }
    let categories = [];
    for (let key of category) {
        temp2.current.set(key, 1);
        categories.push(<FormOptionwa text={key} cur={temp2} change={changeCheckSourceState} key={key} />);
    }

    useEffect(() => {
        SourceOptions.current = (
            <>
                {sources}
            </>
        )
        if (temp.current != checkSourceState) changeCheckSourceState(temp.current);
    }, [source]);
    useEffect(() => {
        CategoryOptions.current = (
            <>
                {categories}
            </>
        )
        if (temp.current != checkSourceState) changeCheckSourceState(temp.current);
    }, [category]);
    let width = window.innerWidth;
    if (width >= 1250)
        width = 250
    return (
        <div className="w-100">

            <div id="mySidebar" className={`${styles.sidebar}  `} style={{ width: (navState === true ? width : '0px') }}>
                <i className={`${styles.closebtn}`} onClick={toggleNav} style={{ color: 'black' }}>×</i>
                <br />
                <div>
                    <span data-bs-toggle="collapse" data-bs-target="#HomeSidebar" style={{ color: 'red', marginTop: '0px' }}>
                        Home
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
                    {CategoryOptions.current}
                </div>
                <br />
            </div>


            <button id="togglesidebar" className={`${styles.openbtn}`} style={{ display: (navState === true ? 'none' : 'block'), position: 'absolute', top: '0px', left: '0px' }} onClick={toggleNav}>☰</button>
        </div >
    )
}
