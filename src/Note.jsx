import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'; 
const Note = (props) => {
    const ondelet=()=>{
        props.deletItem(props.id)
    }

    return (
        <>
            <div className='note' >
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className='btn' onClick={ondelet} >
                    <DeleteOutlineIcon className="deletIcon" />
                </button> 

            </div>
        </>

    )
}

export default Note
