import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    const onsubmits=()=>{
        props.onsubmit(props.id)
    }

    return (
        <>
            <div className='note' >
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button className='btn' onClick={onsubmits} >
                    <DeleteOutlineIcon className="deletIcon" />
                </button> 

            </div>
        </>

    )
}

export default Note
