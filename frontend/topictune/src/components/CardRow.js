import React from 'react';
import Card from './SampleCard';

export default function CardRow({ title, text, imgSrc, url }) {
    return (
        <div className="col-md-2 mb-3 mx-5">
            <Card
                title={title}
                text={text}
                imgSrc={imgSrc}
                url={url}
            />
        </div>
    )
}
