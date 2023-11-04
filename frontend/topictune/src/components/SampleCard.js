import React from 'react';

export default function Card({ title, text, imgSrc, url }) {
    const cardStyle = {
        width: "15rem",
        border: "2px solid black",
        borderRadius: "10px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "transform 0.2s",
    };

    const titleStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "left",
    };

    const textStyle = {
        fontSize: "14px",
        textAlign: "left",
    };

    const imageStyle = {
        maxWidth: "100%",
        height: "auto",
    };
    const truncatedText = (text && text.length > 30) ? text.slice(0, 100) + "..." : text;
    return (
        <div className="card" style={cardStyle}>
            <img src={imgSrc} className="card-img-top" alt="Card" style={imageStyle} width="400" height="150" />
            <div className="card-body">
                <h5 className="card-title" style={titleStyle}>{title}</h5>
                <p className="card-text" style={textStyle}>
                    {truncatedText}
                </p>
                <a href={url} className="btn btn-primary" style={{ backgroundColor: "black", color: "white", border: "none" }}>
                    Read More
                </a>
            </div>
        </div>
    );
}
