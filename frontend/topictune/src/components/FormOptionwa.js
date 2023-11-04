import React from 'react'

export default function FormOptionwa({ text }) {
    return (
        <>
            <div className="form-check" id="driverSideba1r" style={{ backgroundColor: 'rgb(216, 255, 244)', fontSize: '50%' }}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                <label class="form-check-label" htmlFor="flexCheckDefault1">
                    {text}
                </label>
            </div>
        </>
    )
}
