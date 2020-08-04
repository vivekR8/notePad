import React from 'react';
import './section-head.styles.css';

const sectionHead = ({notesHead,data,onClickFuntion})=>(
    <div 
    onClick={(e)=>onClickFuntion(e,data,notesHead)} 
    className='section-head'>
    
        <span className='title'>{notesHead}</span>
        <p className='subTitle'>Time</p>
    </div>
);

export default sectionHead;