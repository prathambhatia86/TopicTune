import React from 'react';
import Card from './SampleCard';

export default function CardGrid() {
    return (
        <div className="container" style={{marginTop:'40px'}}>
            <div className="row">
                <div className="col-md-3 mb-3 mx-4">
                    <Card
                        title="Card Title 1"
                        text="Some quick example text for Card 1."
                        imgSrc="https://th.bing.com/th/id/OIP.2pziS-vfUL51iDqgbqOjVQHaJ4?pid=ImgDet&rs=1"
                    />
                </div>
                <div className="col-md-3 mb-3 mx-4">
                    <Card
                        title="Card Title 2"
                        text="Some quick example text for Card 2."
                        imgSrc="https://th.bing.com/th?id=OSK.HERO3qx4szg27VWC1TvIitd3E_Tzlo8aAvbkJ5N1cPR5VpM&w=472&h=280&c=1&rs=2&o=6&pid=SANGAM"
                    />
                </div>
                <div className="col-md-3 mb-3 mx-4">
                    <Card
                        title="Card Title 3"
                        text="Some quick example text for Card 3."
                        imgSrc="image3.jpg"
                    />
                </div>
                {/* Add more cards using the Card component */}
            </div>
        </div>
    );
}
