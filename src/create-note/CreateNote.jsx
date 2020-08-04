import React from 'react';

const createNote = ({children,keyName,value,isDone})=>(
    
    <button>
        {children}
        {
        isDone? (console.log(keyName,value)):(console.log('sorry'))
        }
    
    </button>
    
);

export default createNote;