import React, { useState } from 'react';
import './card-style.css'
import quotes from './quotes.json';
import colors from './colors.json'
const Card = ({actualColor, changeColor}) => {
    const [actualQuote, setActualQuote] = useState(Math.floor(Math.random() * quotes.length));
    const nextFunction = () => {
        setActualQuote(Math.floor(Math.random() * quotes.length))
        changeColor()
    }
    return (
        <div className='card-container'>
            <div className='quotes'>
                <svg fill={actualColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" /></svg>
                <p style={{color:actualColor}}>{quotes[actualQuote].quote}</p>
            </div>

            <p style={{color:actualColor}}>- {quotes[actualQuote].author}</p>

            <button className="next" style={{backgroundColor:actualColor}} onClick={nextFunction}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
            </button>
        </div>
    );
};

export default Card;