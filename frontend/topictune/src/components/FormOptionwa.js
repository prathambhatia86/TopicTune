import React, { useState } from 'react'

export default function FormOptionwa({ text, change, cur,selected }) {
    const [state, changeState] = useState(cur.current);
    return (
        <>
            <div className="form-check" id="driverSideba1r" style={{ backgroundColor: 'rgb(216, 255, 244)', fontSize: '50%' }}>
                <input className="form-check-input" type="checkbox" value="" id={text} checked={cur.current.get(text) == 1 ? true : false} onChange={(event) => {
                    let map = new Map();
                    for (let k of cur.current.keys()) {
                        map.set(k, cur.current.get(k));
                    }
                    if(1-map.get(event.target.id))
                    {
                        selected.current.push(event.target.id);
                    }
                    else
                    {
                       
                        const indx=selected.current.indexOf(event.target.id);
                        selected.current.splice(indx,1);
                        console.log(selected.current.length);
                    }
                    map.set(event.target.id, 1 - map.get(event.target.id));
                   
                    cur.current = map;
                    changeState(cur.current);
                }} />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                    {text}
                </label>
            </div>
        </>
    )
}
