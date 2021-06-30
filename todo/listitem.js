import React from 'react'
import './list.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function listitem(props) {

    const items = props.items;
    const listitems = items.map(item=>{
        return <div className="itemlist" key={item.key}>
        
        <p>
        {item.text}
        <span>
                <FontAwesomeIcon
                 className="faicons" 
                 icon="trash"
                 onClick={()=>props.deleteItem(item.key)}/>
           </span>
        </p>
        </div>
    })
    return (
        <div>
           <div>
           {listitems}
           
           
           </div>
        </div>
    )
}

export default listitem;
