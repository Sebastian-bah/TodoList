import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return ( 
        <div>
            {props.todo.map((todo) => {
               return <TodoItem todo={todo} key={todo.id} onHUI={props.onTog}/>
            })}
        </div>
    );
}
 
export default TodoList;