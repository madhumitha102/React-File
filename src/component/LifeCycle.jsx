import react, { Component } from "react"

class LifeCycle extends Component {
    state = {
        productdata: []
    }


    componentDidMount() {

        this.handlelife()
    }

    handlelife = async () => {
        let res = await fetch("https://fakestoreapi.com/products")

        let data = await res.json()
        this.setState({ productdata: data })

    }


    render() {
        return (
            <div className="row ">
                <h1>life Cycle</h1>
                {this.state.productdata.map((item) => (
                    <div className="col-4" >
                        <h1>{item.title}</h1>
                        <h1>{item.price}</h1>

                        <div class="card col-4 mb-3">
                            <img class="card-img-top" src={item.image} alt="Card image cap"></img>
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <a href="#" class="btn btn-primary">{item.price}</a>
                            </div>
                            </div>
                    </div>

                )
                )
                }
            </div>
        )
    }
}


export default LifeCycle