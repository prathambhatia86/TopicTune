// Card.js
import React from 'react';

export default function Card({ title, text, imgSrc, link }) {
    const cardStyle = {
        width: "15rem",
        border: "2px solid black",
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#f8f8ff",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        transition: "transform 0.2s",
    };

    const titleStyle = {
        fontSize: "14px",
        textAlign: "left",
    };

    const textStyle = {
        fontSize: "12px",
        textAlign: "left",
    };

    return (
        <div className="card" style={cardStyle}>
            <img src={imgSrc} className="card-img-top" alt="Card" width="400" height="150" />
            <div className="card-body" style={{ backgroundColor: "#f8f8ff" }}>
                <h5 className="card-title" style={titleStyle}>{title}</h5>
                <p className="card-text" style={textStyle}>
                    {text}
                </p>
                <a href={link} className="btn btn-primary" style={{ border: "1px solid #333", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", color: "#000" }}>
                    Read More..
                </a>
            </div>
        </div>
    );
}
