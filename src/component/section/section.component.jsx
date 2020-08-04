import React from 'react';

import SectionHead from '../section-heads/section-head.component';
import SectionTop from '../sectiontop/sectionTop.component.jsx';



const section =({showList,searchfield,onClickFuntion})=>{
    let storage =Object.keys(sessionStorage)
           return( 
           <div className="section">
                <SectionTop searchfield={searchfield} onClickFuntion={onClickFuntion}/>
                {(showList.length>0)?
                (showList.map(item=><SectionHead onClickFuntion={onClickFuntion} notesHead={item} data={sessionStorage.getItem(item)}/>))
                :(storage.map(item=><SectionHead onClickFuntion={onClickFuntion} notesHead={item} data={sessionStorage.getItem(item)}/>))
            
                   
                }
                </div>
                );
            }

export default section;