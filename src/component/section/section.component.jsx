import React from 'react';

import SectionHead from '../section-heads/section-head.component';
import SectionTop from '../sectiontop/sectionTop.component.jsx';



const section =({searchfield,onClickFuntion})=>(
            <div className="section">
                <SectionTop searchfield={searchfield} onClickFuntion={onClickFuntion}/>
                {Object.keys(sessionStorage)
                .map(item=><SectionHead onClickFuntion={onClickFuntion} notesHead={item} data={sessionStorage.getItem(item)}/>)}
                
            </div>
        
);

export default section;