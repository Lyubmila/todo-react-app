const TodoItem = (props) => {
    const {text, createdAt, isCompleted} = props.todo
    return(
        <div>
            <h3>{text}</h3>
            <h4>{createdAt}</h4>
            <h5>{isCompleted}</h5>
        </div>
    )
}

export default TodoItem