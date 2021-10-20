import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm(){
    const {
        saveTodo,

    } = React.useContext(TodoContext)
    const onCancel = () =>{
        //TODO 
    }
    const onAñadir = () =>{
        //TODO 
    }
    const onSubmit = () =>{
        //TODO 
    }
    <form onSubmit={onSubmit}>
        <label>...</label>
        <textarea 
            placeholder="Cortar la cebolla"
        />
        <div>
            <button type="button" onClick={onCancel}>
            Cancelar 
            </button>
            <button type="submit"onClick={onAñadir}>
            Añadir 
            </button>
        </div>
    </form>

}
export {TodoForm};