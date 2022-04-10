import { useContext } from "react";
import Context from "./Context";

const TodoItem = ({todo, onHUI}) => {
const classes = []

if (todo.completed){
  classes.push('done')
}

const {remove} = useContext(Context)
 
  return (
    <div>
      <div className="TodoItem">
        <div className={classes.join(' ')}>
        <input type="checkbox" checked={todo.completed} onChange={() => onHUI(todo.id)}/>
        {todo.title}        
        </div>
        <button onClick={remove.bind(null, todo.id)}>&times;</button>        
      </div>
    </div>
  );
};

export default TodoItem;
