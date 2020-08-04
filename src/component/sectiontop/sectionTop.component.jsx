import React, { useState } from 'react';


import './sectionTop.styles.scss';



const SectionTop = ({searchfield,onClickFuntion}) =>{
    return(
    <div className='sectionTop'>
        <input onChange={e=>searchfield(e.target.value)} className='input'/>
        <span onClick={e=>onClickFuntion(e,'','')} className='icon' >+</span>
    </div>
    );
    };

export default SectionTop;