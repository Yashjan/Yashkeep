import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Createnotes from './Createnotes';
import Note from './Note';
const App = () => {
  const [additem,setadditem]=useState([])

  const addevents=(note)=>{
    // console.log("I am clicked")
    setadditem((preval)=>{
      return [...preval,note]
    })
  }
  // console.log(additem)

  const deletNote=(id)=>{
    setadditem((old)=>{
      return old.filter((cur,inde)=>{
        return inde !== id;
      })
    })

  }

  return (
    <>
    <Header />
    <Createnotes passnote={addevents} />
    {additem.map((val,index)=>{
      return <Note 
      key={index}
      id={index}  
      title={val.title}
      content={val.content}
      deletItem={deletNote}  />
    
    })}
    <Footer />
    </>
  )
}

export default App;
