import React, { useState, useEffect, useRef } from 'react';
import CardRow from './CardRow';
import axios from 'axios';
import Exclusion from './Exclusion';
import ClipLoader from "react-spinners/ClipLoader";
export default function CardGrid({ source, category,selectedSources,selectedCategories}) {
    let ExclusionOptions = useRef([]);
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    let sources = []
    for (var key in source) {
        sources.push(source[key]);
    }
    const [cardGrid, changeCardGrid] = useState([]);
    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/getNews',
            data: {
                sources: selectedSources.current,
                categories: selectedCategories.current,
                restrictions: ExclusionOptions
            }
        })
            .then(function (news) {
                news = news.data.articles;
                let tempgrid = []
                for (let k = 0; k < news.length; k += 4) {
                    let tempRow = [];
                    if (news.length - k == 1) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /></div>);
                    } else if (news.length - k == 2) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} url={news[k + 1].url} /></div>);
                    } else if (news.length - k == 3) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} url={news[k + 1].url} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} url={news[k + 2].url} /></div>);
                    } else {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} url={news[k + 1].url} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} url={news[k + 2].url} /><CardRow title={news[k + 3].title} text={news[k + 3].description} imgSrc={news[k + 3].urlToImage} url={news[k + 3].url} /></div>);
                    }
                    tempgrid.push(tempRow);
                }
                changeCardGrid(tempgrid);
                setLoading(false);
            })
    }, []);
    const changeExclusion = (temp) => {
        
        ExclusionOptions.current = temp;
     //console.log(body.categories)
        axios({
            method: 'post',
            url: 'http://localhost:5000/getNews',
            data:{
                sources: selectedSources.current,
                categories: selectedCategories.current,
                restrictions: ExclusionOptions
            }
        })
            .then(function (news) {
                news = news.data.articles;
                let tempgrid = []
                for (let k = 0; k < news.length; k += 4) {
                    let tempRow = [];
                    if (news.length - k == 1) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /></div>);
                    } else if (news.length - k == 2) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} url={news[k + 1].url} /></div>);
                    } else if (news.length - k == 3) {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} url={news[k + 1].url} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} url={news[k + 2].url} /></div>);
                    } else {
                        tempRow.push(< div className="row" ><CardRow title={news[k].title} text={news[k].description} imgSrc={news[k].urlToImage} url={news[k].url} /><CardRow title={news[k + 1].title} text={news[k + 1].description} imgSrc={news[k + 1].urlToImage} url={news[k + 1].url} /><CardRow title={news[k + 2].title} text={news[k + 2].description} imgSrc={news[k + 2].urlToImage} url={news[k + 2].url} /><CardRow title={news[k + 3].title} text={news[k + 3].description} imgSrc={news[k + 3].urlToImage} url={news[k + 3].url} /></div>);
                    }
                    tempgrid.push(tempRow);
                }
                changeCardGrid(tempgrid);
                setLoading(false);
            })
    };

    return (
        <>
            {loading && <div className='mt-5'><ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /></div>}
            {!loading &&
                <>
                    <Exclusion changeExclusion={changeExclusion} setLoading={setLoading} />
                    <div className="container mx-0 my-0" style={{ marginTop: '40px' }}>
                        {cardGrid}
                    </div>
                </>
            }
        </>
    );
}
