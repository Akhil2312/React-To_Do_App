
import React, { Component } from 'react'
import './list.css'
import Listitem from './listitem.js'
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
class list extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                placehold:"Enter task",
                 items : [],
                 currentItem :{
                     text:' ',
                     key:' '
                 }
            };
            this.handleInput =this.handleInput.bind(this);
            this.addItem=this.addItem.bind(this);
            this.deleteItem=this.deleteItem.bind(this);

        }
            handleInput(e){
           this.setState({
               currentItem:{
               text:e.target.value,
               key:Date.now()
           }
       })
    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==' '){
            const newItems = [...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:' ',
                    key:" "
                }
            })
        }
        
    }

    deleteItem(key){
        const removeItem = this.state.items.filter(item=>
            item.key!==key);
            this.setState({
                items:removeItem
            })
    }
    render() {
        return (
            <div className='App'>
                

                <header>
                    <form  className='to-do-form'  onSubmit={this.addItem}>
                        <input 
                         type='text'
                         name='tasks'
                         onChange={this.handleInput}
                         value={this.state.currentItem.text}
                         placeholder={this.state.placehold}
                         />

                         <button type="submit">Add</button>
                    </form>
                </header>
                <Listitem items={this.state.items}
                deleteItem = {this.deleteItem}/>
            </div>
        )
    }
}

export default list
