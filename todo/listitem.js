import React from 'react'
import './list.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function listitem(props) {

    const items = props.items;
    const listitems = items.map(item=>{
        return <div className="itemlist" key={item.key}>
        
        
                    <div>
                        {item.text}
                    </div>
       
        <div>
               <FontAwesomeIcon
                  className="faicons" 
                  icon="trash"
              onClick={()=>props.deleteItem(item.key)}/>

           </div>
   
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
