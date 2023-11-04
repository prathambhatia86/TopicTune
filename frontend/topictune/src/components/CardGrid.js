import React, { useState, useEffect,useRef } from 'react';
import CardRow from './CardRow';
import axios from 'axios';
import Exclusion from './Exclusion';

export default function CardGrid({ source, category }) {
    let ExclusionOptions=useRef([]);
  
    console.log(category);
    let sources = []
    for (var key in source) {
        sources.push(source[key]);
    }
    var body = {
        sources: sources,
        categories: category,
        restrictions:ExclusionOptions
    }
    const [cardGrid, changeCardGrid] = useState([]);
    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/getNews',
            data: body
        })
            .then(function (news) {
                news = news.data.articles;
                let tempgrid = []
                for (let k = 0; k < news.length; k += 4) {
                    let tempRow = [];
                    if (news.length - k == 1) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /></div>);
                    } else if (news.length - k == 2) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} /></div>);
                    } else if (news.length - k == 3) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} /></div>);
                    } else {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} /><CardRow title={news[k + 3].title} text={news[k + 3].description} imgSrc={news[k + 3].urlToImage} /></div>);
                    }
                    tempgrid.push(tempRow);
                }
                changeCardGrid(tempgrid);
            })
    }, []);
    const changeExclusion=(temp)=>{
        console.log(temp);
        ExclusionOptions.current=temp;
       
            axios({
                method: 'post',
                url: 'http://localhost:5000/getNews',
                data: body
            })
                .then(function (news) {
                    news = news.data.articles;
                    let tempgrid = []
                    for (let k = 0; k < news.length; k += 4) {
                        let tempRow = [];
                        if (news.length - k == 1) {
                            tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /></div>);
                        } else if (news.length - k == 2) {
                            tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} /></div>);
                        } else if (news.length - k == 3) {
                            tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} /></div>);
                        } else {
                            tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} /><CardRow title={news[k + 3].title} text={news[k + 3].description} imgSrc={news[k + 3].urlToImage} /></div>);
                        }
                        tempgrid.push(tempRow);
                    }
                    changeCardGrid(tempgrid);
                })
        };
        
    return (
        <>
         <Exclusion changeExclusion={changeExclusion} />
        <div className="container mx-0 my-0" style={{ marginTop: '40px' }}>
            {cardGrid}
        </div>
        </>
    );
}
