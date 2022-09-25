import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'Stepan',
      age: 25,
      nextUser: 'Mykola',
      isHidden: false,
    };
  }

  onChangeNameClickHandler = () => {
    if (this.state.name === 'Mykola') {
      this.setState({ name: 'Stepan', age: 25, nextUser: 'Mykola' });
    } else {
      this.setState({ name: 'Mykola', age: 30, nextUser: 'Stepan' });
    }
  };

  onToggleParagraphClickHandler = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <div className='main'>
        {this.state.isHidden ? null : (
          <p>
            Name: {this.state.name}, age: {this.state.age}
          </p>
        )}
        <button onClick={this.onChangeNameClickHandler}>
          Change name to {this.state.nextUser}
        </button>
        <button onClick={this.onToggleParagraphClickHandler}>
          {this.state.isHidden ? 'Show' : 'Hide'} paragraph
        </button>
      </div>
    );
  }
}

export default App;
