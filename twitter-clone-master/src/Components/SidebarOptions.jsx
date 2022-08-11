import React from 'react'

function SidebarOptions({  active , Icon , text  }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>

            <Icon className='Icons'/>
            <h2>{text}</h2>
            
    </div>
  )
}

export default SidebarOptions