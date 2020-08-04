import React from 'react';
import './section-head.styles.css';
import Button from '@material-ui/core/Button';


const sectionHead = ({notesHead,data,onClickFuntion})=>(
    <div 
    onClick={(e)=>onClickFuntion(e,data,notesHead)} 
    className='section-head'>
        <Button  variant="contained" className='title'>{notesHead}</Button>
        

    </div>
);

export default sectionHead;