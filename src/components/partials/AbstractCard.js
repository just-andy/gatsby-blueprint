import React from 'react';
import {Link} from 'gatsby';

const AbstractCard = ({title, summary, link, image}) => {



    return (
        <article className=" border-2 border-gray-400 rounded-lg grid">
            <div className="c-grid-stacked z-20 p-3">
                <h3 className="mt-0">{title}</h3>
                <div className="text-sm mb-3 w-9/12">
                {summary}
                </div>
                <Link to={link} alt={title} className="btn btn-primary inline-block" title="Button View">View</Link>
            </div>
            <div className="c-grid-stacked grid">
                {image}
            </div>
           
        </article>
    )
}

export default AbstractCard;