import React, {Component} from 'react';
import './Intercom.css';
import {NUMBERS} from "../../numbers";
import {connect} from 'react-redux';

class Intercom extends Component {
    render() {
        return (
            <div className="Intercom">
                <div>
                    <input type="password" className={this.props.color} defaultValue={this.props.number}/>
                </div>
                <div className="buttons">
                {NUMBERS.map((number,key) => (
                    <button key={key} onClick={() => this.props.addNumber(number)} disabled={this.props.disableButton}>
                        {number}
                    </button>
                ))}
                    <button onClick={this.props.removeNumber}>X</button>
                    <button onClick={this.props.buttonConfirm}>E</button>
                    <div className="block">{this.props.trueAnswer || this.props.falseAnswer}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      number: state.number,
      color: state.color,
      trueAnswer: state.trueAnswer,
      falseAnswer: state.falseAnswer,
      disableButton: state.disableButton,
  }
};

const  mapDispatchToProps = dispatch => {
  return {
      addNumber: num => dispatch({type: 'ADD_NUMBERS', num: num}),
      buttonConfirm: () => dispatch({type: 'CONFIRM_NUMBERS'}),
      removeNumber: () => dispatch({type: 'REMOVE_NUMBER'}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Intercom);