import React from 'react'
import "./App.css"
import axios from 'axios';

class App extends React.Component {
  state = { advice: '' };
  componentDidMount() {
    this.fetchAdivce();
  }
  fetchAdivce = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      const { advice } = response.data.slip;
      this.setState({ advice });
    }).catch((error) => {
      console.log(error)
    })
  }
  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="app">
          <div className="card">
            <div className="heading">
              <h4>{advice}</h4>
              <button type="button" class="btn btn-outline-primary" onClick={this.fetchAdivce}>
                <span>Give me Advice!</span>
              </button>
            </div>
          </div>
        </div>
      </>

    )
  }
}

export default App