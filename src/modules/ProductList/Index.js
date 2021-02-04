import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchProducts } from "./Actions";
import { addToCart } from "../Cart/Actions";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = (product) => {
        this.setState({ product });
    };
    closeModal = () => {
        this.setState({ product: null });
    };
    render() {
        const { product } = this.state;
        return (
            <div>
                {!this.props.products ? (
                    <div>Loading...</div>
                ) : (
                        <React.Fragment>

                            {this.props.products.map((product) => (
                                <div key={product.id} className="card text-center" style={{ width: '400px' }}>
                                    <div className="card-body products" >
                                        <div className="product">
                                            <a
                                                href={"#" + product.id}
                                                onClick={() => this.openModal(product)}
                                                data-toggle="modal" data-target="#myModal"
                                            >
                                                <img src={product.image} alt={product.title}></img>
                                                <p>{product.title}</p>
                                            </a>
                                            <div className="product-price">
                                                <button onClick={() => this.props.addToCart(product)}
                                                    className="button primary">
                                                    Add To Cart </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                )}
                {product && (
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">{product.title}</h4>
                                    <button type="button" className="close" onClick={this.closeModal} data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    {product.description}
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={() => {
                                        this.props.addToCart(product);
                                        this.closeModal();
                                    }} data-dismiss="modal">Add To Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
      
    return {
        products: state.productState.data,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
     
    return bindActionCreators(
        {
            fetchProducts,
            addToCart,
        }, dispatch);
}


const connectedProducts = connect(mapStateToProps, mapDispatchToProps)(Products);
export { connectedProducts as Products };