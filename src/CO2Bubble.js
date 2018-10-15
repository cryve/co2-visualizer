import React from 'react';
import { IoMdTrendingUp, IoMdTrendingDown, IoMdArrowForward } from 'react-icons/io';
import { TENDENCY_FALLING, TENDENCY_RISING, TENDENCY_STAGNATING, TENDENCY_UNKNOWN } from './constants';
import './CO2Bubble.css';

const renderTendency = tendency => {
    switch(tendency) {
        case TENDENCY_RISING: 
            return <IoMdTrendingUp />;
        case TENDENCY_FALLING:
            return <IoMdTrendingDown />;
        case TENDENCY_STAGNATING:
            return <IoMdArrowForward />;
        case TENDENCY_UNKNOWN:
        default:
            return '...';
    }
}

const CO2Bubble = ({
    value,
    tendency,
    indication
}) => {
    return (
        <div className={`bubble border-${indication}`}>
            <p>{renderTendency(tendency)}</p>
            <h1>CO<sub>2</sub></h1>
            <p>{value} ppm</p>
        </div>
    );
};

export default CO2Bubble;