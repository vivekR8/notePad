import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import './sectionTop.styles.scss';



const SectionTop = ({searchfield,onClickFuntion}) =>{
    return(
    <div className='sectionTop'>
        <input onChange={e=>searchfield(e.target.value)} className='input'/>
        <AddIcon onClick={e=>onClickFuntion(e,'','',true)}  fontSize="large" className='icon'>star</AddIcon>
        
    </div>
    );
    };

export default SectionTop;