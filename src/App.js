import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deals: []
    }
  }

  componentDidMount(){
    let url = "http://localhost:3001/deals";
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let deals = data.map((deal,index) => {
        return (
          <div key={index}>
            <h3>{deal.title}</h3>
            <p>OLD PRICE: {deal.old_price}</p>
            <p>NEW PRICE: {deal.new_price}</p>
          </div>
        )
      })
      this.setState({deals: deals});
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.deals}
      </div>
    )
  }
}


export default App;
