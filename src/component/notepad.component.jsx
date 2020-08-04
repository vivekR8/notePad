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
            text:'CREATE NEW NOTE',
            list:''
        }
    }
   
    onClickChange=(e,data,notesHead)=>{
        // console.log('onclickchnage',e.target);
        if (data)
        {this.setState({text:"UPDATE"})}
        else{this.setState({text:"CREATE NEW NOTE"})}
        this.setState({data:data,notesHead:notesHead})
        //console.log('notepad',data);
    }
    searchfield = (inputText)=>{
        //console.log(inputText)
        let copyList=Object.keys(sessionStorage).map(item=>((item)))
        
        let filteredlist = copyList.filter(item=> item.includes(inputText))
        this.setState({list:filteredlist})
        

    }
    render(){
        const {notesHead,data,text,list} = this.state;
       
        return(
            <div className='container'>
                <Section showList={list} searchfield={this.searchfield} onClickFuntion={this.onClickChange}/>
                <SectionNotes 
                 text={text}
                 data={data} 
                 notesHead={notesHead}/>
            </div>
        );
    }
    
};
export default Notepad;