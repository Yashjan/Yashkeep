import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Createnotes = (props) => {
        const [expend,setexpend]= useState(false)
    
        const [note,setnote] = useState({
            title:'',
            content:'',
        })
    
        const inputevent=(event)=>{
            const{name,value} = event.target
            setnote((prevalue)=>{
                return{
                    ...prevalue,
                    [name]:value,
                }
            })
        }
    
        const addevent=()=>{
            props.passnote(note)
            setnote({
                title:'',
                content:'',
            })
    
        }
    
        const expendevent=()=>{
            setexpend(true)
        }
    
        const shrinkevent=()=>{
            setexpend(false)
        }
    
        return (
            <>
                <div className="main_note" onDoubleClick={shrinkevent} >
                    <form >
                        {
                            expend?<input type="text" placeholder="Title" autoComplete="off" onChange={inputevent} value={note.title} name="title" /> : null
                        }
                        <textarea placeholder="Write a note..." cols="" rows="" onChange={inputevent} value={note.content} name="content" onClick={expendevent} ></textarea >
                        {
                            expend?<Button onClick={addevent} >
                            <AddIcon className="plus_sign" />
                        </Button> :null
                        }
                    </form>
    
                </div>
            </>
    
    )
}

export default Createnotes
