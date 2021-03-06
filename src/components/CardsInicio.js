import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Descubre Costa Rica</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src= {process.env.PUBLIC_URL + '/images/cosmic-timetraveler-LgrGHYZzBSk-unsplash.jpg'} 
                        text='Aprenda sobre Costa Rica y los lugares a donde puedes ir!'
                        label='Sobre Costa rica'
                        path='/costa-rica'
                        />
                        <CardItem 
                        src={process.env.PUBLIC_URL + '/images/pexels-must-bee-kayak.jpg'}
                        text='En Costa Rica encontrarás: aventura, sol, playas, bosque, vida silvestre, bienestar y mucho más.'
                        label='Actividades'
                        path='/actividades'
                        />
                         <CardItem 
                        src={process.env.PUBLIC_URL + '/images/pexels-dziana-hasanbekava-5589439.jpg'}
                        text='Encuentre donde hospedarse, guias turísticos, restaurantes, transporte y más...'
                        label='Servicios'
                        path='/servicios'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
