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
            list:'',
            newNote:false,
        }
    }
    
    toggleNewNote=()=>{
        this.setState({newNote:false})
    }
   
    refreshList = ()=>{
        this.setState({newNote:false})
    }
    //to set incomint data to states
    onClickChange=(e,data,notesHead,newNote=false)=>{
        // console.log('onclickchnage',e.target);
        this.setState({newNote})
        if (data)
        {this.setState({text:"UPDATE"})}
        else{this.setState({text:"CREATE NEW NOTE"})}
        this.setState({data:data,notesHead:notesHead},()=>{console.log('show',this.state.data,this.state.notesHead)})
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
                 refreshList={this.refreshList}
                 text={text}
                 data={data} 
                 newNote={this.state.newNote}
                 toggleNewNote={this.toggleNewNote}
                 notesHead={notesHead}/>
            </div>
        );
    }
    
};
export default Notepad;