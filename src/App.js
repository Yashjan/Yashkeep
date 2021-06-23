import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Createnotes from './Createnotes';
import Note from './Note';
const App = () => {
  const [additem,setadditem]=useState([])

  const addevent=(note)=>{
    setadditem((preval)=>{
      return [...preval,note]
    })
  }
  console.log(additem)

  const onsubmits=(id)=>{
    setadditem((old)=>{
      old.filter((cur,inde)=>{
        return inde !== id;
      })
    })

  }

  return (
    <>
    <Header />
    <Createnotes passnote={addevent} />
    {additem.map((val,index)=>{
      return <Note 
      key={index}
      id={index}  
      title={val.title}
      content={val.content}
      onsubmit={onsubmits}  />
    
    })}
    <Footer />
    </>
  )
}

export default App;
