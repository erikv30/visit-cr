import React from 'react'
import {Link} from 'react-router-dom'

function CardItem({path, label, src, text}) {
    return (
        <>
            <li className="cards__item">
                <Link className='cards__item__link' to={path}>
                    <figure className='cards__item__pic-wrap' data-category={label}>
                        <img src={src} alt="travel img" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <p className="cards__item__text">{text}</p>
                    </div>
                </Link>
            </li>

        </>
    )
}

export default CardItem
