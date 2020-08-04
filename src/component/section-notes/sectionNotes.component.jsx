import React from 'react';
import './sectionNotes.styles.scss';
import Button from '@material-ui/core/Button';


class sectionNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
            content: '',

        }
    }
    //to show changed/ new props value
    static getDerivedStateFromProps(props, state) {
        
            if(props.newNote) { 
                console.log(props.newNote)
                props.toggleNewNote()
                return {
                heading: '',
                content: ''
            }
        }
            else if (props.notesHead && (props.notesHead !== state.heading)){
                return {
                    heading: '',
                    content: ''
                }
            }
            console.log('gdfp', state.heading)
        
        return null;
    }

    //Showing Updated and new Created content
    handleChange = (e) => {
        console.log('props noteshead', this.props.notesHead, this.state.heading);
        if (this.props.notesHead) {
            this.setState({ heading: this.props.notesHead, content: this.props.data })
        }
        const { name, value } = e.target;
        this.setState({ [name]: value })
        console.log('handlechange', this.state.heading, this.state.content);

    }
    //Storing and Updating in Session Storage
    onClickChange = () => {
        const { heading, content } = this.state;
        if (sessionStorage.getItem(`${this.props.notesHead}`)) {
            sessionStorage.setItem(`${this.props.notesHead}`, content);
        } else {
            if (heading === '' || content === '') {
                alert('please fill heading and content')
            } else {
                sessionStorage.setItem(`${heading}`, content);
                this.props.refreshList(heading)
            }

        }
    };


    render() {
        return (
            <div className='notes'>

                <input
                    className='heading'
                    type='text'
                    name='heading'
                    placeholder='Enter Heading'
                    value={(this.state.heading) ? (this.state.heading) : (this.props.notesHead)



                    }
                    onChange={this.handleChange}
                />
                <textarea
                    className='content'
                    rows="50"
                    name='content'
                    placeholder='Enter content'
                    value={
                        (this.state.content) ? (this.state.content) : (this.props.data)
                    }
                    onChange={this.handleChange}
                />
                <Button variant="outlined" color="primary"
                    onClick={this.onClickChange}>
                    {
                        this.props.text
                    }
                </Button>
            </div>
        );
    }

};

export default sectionNotes;