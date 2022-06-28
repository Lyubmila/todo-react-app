import TodoItem from "./TodoItem";

const TodosList = (props) => {
    console.log(props.todos);
    return (
        <div>
            <h2>Todos</h2>
            <ol>
            {props.todos.map((item, idx) => 
            <li>
            <TodoItem todo={item} key={idx} />
            </li>
            )}
            </ol>
        </div>
    )
}

export default TodosList