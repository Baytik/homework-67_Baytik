import React, {Component} from 'react';
import './Intercom.css';

class Intercom extends Component {
    render() {
        return (
            <div className="Intercom">
                <div>
                <input type="text"/>
                </div>
                <div>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                </div>
                <div>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                </div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
                <div>
                    <button className="btn-1">X</button>
                    <button>0</button>
                    <button>E</button>
                </div>
            </div>
        );
    }
}

export default Intercom;