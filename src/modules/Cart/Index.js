import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { removeFromCart } from "./Actions";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
        };
    }
    closeModal = () => {
        this.props.clearOrder();
    };
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                        <div className="cart cart-header">
                            You have {cartItems.length} in the cart{" "}
                        </div>
                    )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <img style={{width: '71%',height: '100vh'}} src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            <button
                                                className="button"
                                                onClick={() => this.props.removeFromCart(item)}
                                            >
                                                Remove
                        </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: state.cartState.cartItems,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
     
    return bindActionCreators(
        {
            removeFromCart,
        }, dispatch);
}

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export { connectedCart as Cart };