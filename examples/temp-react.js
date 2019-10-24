import { React } from 'react';
import { connect } from 'react-redux'
import { addOneToCounter }  from '../actions/actions.js'

class TempReact extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    render () {
        return (
            <div>
                Counter : <span>{this.counter}</span>
                <button onClick={this.clickHandler}>Increment</button>
            </div>
            
        )
    }

    clickHandler(event) {
        this.addOneToCounter();
      }
}

mapStateToProps = state => {
    return {counter: state.counter}
}

export default connect(
    mapStateToProps,
    {addOneToCounter: addOneToCounter}
  )(TempReact)