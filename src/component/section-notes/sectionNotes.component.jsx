import React from 'react';
import CreateNote from '../../create-note/CreateNote';
import './sectionNotes.styles.scss';

class sectionNotes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heading:'',
            content:'',
            isUpdate: false
        }
    }
    // handleChange = (e)=>{
    //     //console.log('',e.target.value)
    //     this.setState({heading:this.props.notesHead,content:this.props.data})
    //     const {name,value} = e.target;
    //     let prevState = JSON.parse(JSON.stringify(this.state[name]))
    //     console.log('handlechange',prevState);
    //     let newName = prevState + value;
    //     this.setState({[name]:newName})

    // }
    handleChange = (e)=>{
        this.setState({heading:this.props.notesHead,content:this.props.data})
        const{name,value} = e.target;
        this.setState({[name]:value})
        console.log('handlechange',this.state.heading,this.state.content);
    
    }
    onClickChange = ()=>{
        const {heading,content} =this.state;
        //console.log(typeof(this.props.notesHead));
        if(sessionStorage.getItem(`${this.props.notesHead}`)){
            sessionStorage.setItem(`${this.props.notesHead}`,content);
        }else{
            console.log('nothing',sessionStorage)
        }
        // const {heading,content} =this.state;
        // sessionStorage.setItem(`${heading}`,content);
        // console.log(Object.keys(sessionStorage));
        //console.log(sessionStorage);   
    };
    
    render(){
        return(
        <div className='notes'>

            <input 
                className='heading'
                type='text' 
                name = 'heading'
                value = {
                        (this.state.heading)? (this.state.heading):(this.props.notesHead)
                        
                        } 
                onChange={this.handleChange}
                 />
            <textarea 
                className='content'
                rows="50"
                name = 'content' 
                value={
                    (this.state.content)? (this.state.content):(this.props.data) 
                    }
                onChange={this.handleChange}
            />
            <button 
            onClick={this.onClickChange}>
                {
                   this.props.text
                    }
            </button>
        </div>
        );
    }
    
};

export default sectionNotes;