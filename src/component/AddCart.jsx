import react, { Component } from "react";




class AddCart extends Component {
    state = {
        count: 1,
        name: "madhumitha"
    };

    handleclick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidUpdate() {
        // handlename = () => {
        //     this.setState({ name: "queen's order" })

            // console.log("update  something");

            this.handlename()

        }

        componentWillUnmount(){}
    
         handlename = () => {
            //  this.setState({name:"queen's order"})
            console.log("api called");
         }
        render() {
            return (
                <>
                    <h1>addcart task</h1>
                    <h2>count:{this.state.count}</h2>
                    <h2>name : {this.state.name}</h2>

                    <button onClick={this.handleclick}>add</button>
                    {/* <button onClick={this.handlename}>change name</button> */}

                </>
            )

        }
    }
    


export default AddCart