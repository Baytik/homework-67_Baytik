import React, {Component} from 'react';
import './Intercom.css';
import {NUMBERS} from "../../numbers";
import {connect} from 'react-redux';

class Intercom extends Component {
    render() {
        return (
            <div className="Intercom">
                <div>
                    <input type="text" value={this.props.number}/>
                </div>
                <div className="buttons">
                {NUMBERS.map(numbers => (
                    <button key={numbers} onClick={() => this.props.addNumber(numbers)}>{numbers}</button>
                ))}
                    <button>X</button>
                    <button onClick={this.props.buttonConfirm}>E</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      number: state.number
  }
};

const  mapDispatchToProps = dispatch => {
  return {
      addNumber: num => dispatch({type: 'ADD_NUMBERS', num: num}),
      buttonConfirm: () => dispatch({type: 'CONFIRM_NUMBERS'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Intercom);