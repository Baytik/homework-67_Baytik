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
      addNumber: event => dispatch({type: 'NUMBERS', num: event})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Intercom);