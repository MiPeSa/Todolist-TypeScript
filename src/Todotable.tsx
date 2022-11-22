import { Todo } from "./interfaces";

interface Props{
    todo:Todo;
    deleteTodo(todoToDelete:string):void;
}

const Todotable = ({todo, deleteTodo}:Props) =>{
    return( 
        <div className="table">
        <table>  
            <tbody>     
                {
                    <tr key={todo.desc}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                    <td>{todo.priority}</td>
                    <td><button onClick={() => deleteTodo(todo.desc)}>Delete</button></td>
                    </tr>
                }
            </tbody>
        </table>
        </div>
 
    );
}

export default Todotable;