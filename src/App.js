import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import Coins from './components/coins/coins.component';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      displayCustomers: true,
      displayCoins: false,
    };
  }

  // As I don't know anything about Django REST Framework I used this API to get fake customer information
  // The pictures are taken from another API in the card component
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ customers: users }));
  }

  //logic to change display in container App
  changeToCustomers = () => {
    if(this.state.displayCoins) {
      this.setState({
        displayCustomers: true,
        displayCoins: false,
      });
    }
  }

  changeToCoins = () => {
    if(this.state.displayCustomers) {
      this.setState({
        displayCustomers: false,
        displayCoins: true,
      });
    }
  }

  render() {
    return(
      <div className='App'>
        <div className="tab-container">
          <button className="tab-button" onClick={this.changeToCustomers}> CUSTOMERS </button>
          <button className="tab-button" onClick={this.changeToCoins}> COINS </button>
        </div>
        {this.state.displayCustomers ? (
          <CardList customers={this.state.customers} />
        ) : (
          <Coins />
        )}
      </div>
    )
  }
}

export default App;
