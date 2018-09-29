function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}

class Hello extends React.Component {
    render() {
        return <h1>Hello {this.props.message}</h1>;
    }
}
ReactDOM.render(<Hello message="my friend"/>, document.getElementById("root"));