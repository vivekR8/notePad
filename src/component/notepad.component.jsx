import React from 'react';
import Section from './section/section.component';
import SectionNotes from './section-notes/sectionNotes.component';
import './notepad.styles.css';

class Notepad extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notesHead:'',
            data:'',
            text:'CREATE NEW NOTE'
        }
    }
    onClickChange=(e,data,notesHead)=>{
        if (data)
        {this.setState({text:"UPDATE"})}
        else{this.setState({text:"CREATE NEW NOTE"})}
        this.setState({data:data,notesHead:notesHead})
        console.log('notepad',data);
    }
    searchfield = (inputText)=>{
        console.log(inputText.value)
        console.log(Object.keys(sessionStorage).map(item=>(item[0])));
    }
    render(){
        const {notesHead,data,text} = this.state;
        return(
            <div className='container'>
                <Section searchfield={this.searchfield} onClickFuntion={this.onClickChange}/>
                <SectionNotes 
                 text={text}
                 data={data} notesHead={notesHead}/>
            </div>
        );
    }
    
};
export default Notepad;