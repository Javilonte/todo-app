import React from 'react';
import {TodoCounter} from '../TodoCounter';
import {TodoContext} from '../TodoContext';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../modal';
import {TodoForm} from '../TodoForm';
import "./App.css";
function AppUI(){
    //Se importan las propiedades de los diferentes states para tenerlos listos y utilizarlos
    const {
      error, 
      loading, 
      searchedTodos,
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
     } = React.useContext(TodoContext);


    return(
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
      {error && <p>Hubo algún error...</p>}
      {loading && <p>Estamos cargando lo más rápido posible...</p>}
      {(!loading && !searchedTodos.lenght) &&<p className="Parrafo">¡Crea tu primer TODO!</p>}
      
      {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text}
         text={todo.text}
         completed={todo.completed}
         onComplete={() => completeTodo(todo.text)}
         onDelete={()=> deleteTodo(todo.text)}
          />
      ))}
    </TodoList>
        
        <Modal>
          <TodoForm />
        </Modal>
    <CreateTodoButton 
    //Se le asigna el set open modal para que llame al actualizador setopenmodal y actualize el estado
      setOpenModal = {
        setOpenModal
      }
    />
    </React.Fragment>
    );
}

export {AppUI};