const Navbar = (props) => {
    return (
        <nav style={styles.container}>
            <h1>{props.text}</h1>

            <ul>
                <li>Home</li>
                <li>Todos</li>
            </ul>

        </nav>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        border: 'solid blue 2px'
    }
}

export default Navbar