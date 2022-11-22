import React, { useState } from "react";
import Todotable from "./Todotable";
import { Todo } from "./interfaces"


function Todolist(){
    const [desc, setDesc] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(event.target.id === "desc"){
        setDesc(event.target.value);
      }else if (event.target.id === "date"){
        setDate(event.target.value)
      }else{
        setPriority(event.target.value)
      }
    }
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const newTodo={
        desc:desc,
        date:date,
        priority:priority
      }
      setTodos([...todos, newTodo]);
      console.log(todos);
    }

    const deleteTodo = (todoToDelete:string) => {
        setTodos(todos.filter((todo)=> {
            return todo.desc !== todoToDelete
        }))
    }
    
    return (
    <>
        <form onSubmit={submitForm}>
        <input type="text" id="desc" onChange={inputChanged} value={desc} placeholder='Description' />
        <input type="text" id="date" onChange={inputChanged} value={date} placeholder='Date'/>
        <input type="text" id="priority" onChange={inputChanged} value={priority} placeholder='Priority'/>
        <input type="submit" value="Add"></input>
        </form>
        {todos.map((todo:Todo, key:number)=>{
          return <Todotable key={key} todo={todo} deleteTodo={deleteTodo}/>
        })}
      </>
    );
}

export default Todolist;