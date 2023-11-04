import React from 'react'

export default function Card() {
    return (
        <div className="card" style={{ width: "18rem", border: "2px solid black", boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)", backgroundColor: "#f8f8ff", borderRadius: "10px", padding: "20px", margin: "10px", transition: "transform 0.2s" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body" style={{ backgroundColor: "#f8f8ff" }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary" style={{ border: "1px solid #333", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", color: "#000" }}>Read More..</a>

            </div>
        </div>
    )
}
