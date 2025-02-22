import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';

import { Title } from './component/Title'

class App extends Component {
  state = {
    inputValue: ''
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { newValue, clickButton } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input onChange={this.inputChange} type='text' value={inputValue} />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <Title title={ newValue } />
      </div>
    );
  }
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);