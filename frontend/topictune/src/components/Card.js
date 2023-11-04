import React, { useState } from 'react';
import Card from './SampleCard';
import CardRow from './CardRow';
import axios from 'axios';

export default function CardGrid() {
    const [news, changeNews] = useState([]);
    var body = {
        sources: [],
        categories: []
    }
    axios({
        method: 'post',
        url: 'http://localhost:5000/getNews',
        data: body
    })
        .then(function (response) {
            changeNews(response.data);
        });
    let cardGrid = [];
    setTimeout(() => {
        for (let k = 0; k < news.length; k += 4) {
            let tempRow = (<></>);
            for (let k1 = k; k1 < news.length; k1 += 1) {
                if (k1 == k + 4) break;
                tempRow += (<CardRow />);
            }
            let cardRow = (<div className="row">)+{tempRow}+(</div>);
            cardGrid.push(cardRow);
        }
    }, 2000);
    return (
        <div className="container mx-0 my-0" style={{ marginTop: '40px' }}>
            {cardGrid}
        </div>
    );
}
