import React, {Component} from 'react';
import {connect} from "react-redux";
import {decreaseAction, increaseAction} from "./action";
import {bindActionCreators} from "redux";

class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onDecrease}>-</button>
                <span>{this.props.count}</span>
                <button onClick={this.props.onIncrease}>+</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDecrease: () => dispatch(decreaseAction()) ,
        onIncrease:bindActionCreators(increaseAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);