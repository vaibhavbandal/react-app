import React, { useEffect, useState } from 'react'

const List = ({student}) => {


  return (
    <div>
      
      {
        student && student.map((e,i)=>{
            return <div>
                        <h3>{e.name}</h3>
                        <h3>{e.city}</h3>
                </div>
        })
      }

    </div>
  )
}

export default List
