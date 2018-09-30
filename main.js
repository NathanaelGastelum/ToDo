function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}

class Hello extends React.Component {
    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: "my friend (from changed state)"
        });
    }
    render() {
        return(
            <div>
                <h1>Hello {this.state.message}</h1>
                <button onClick={this.updateMessage}>Update</button>
            </div>
        ) 
    }
}
ReactDOM.render(<Hello message="my friend"/>, document.getElementById("root"));