function MainWrapper (props) {
    return (
    <div>
        <h1>THIS IS THE HEADER OF THE WEBPAGE</h1>
        <div>
            {props.children}
        </div>
        <footer>
            <h1>Footer of the web page</h1>
        </footer>
    </div>)
}

export default MainWrapper;