import React from "react";
import "./App.css";

class App extends React.Component {

  state={
    numero1 : '',
    numero2 : '',
    resultado : ''
  }

  somar = () => {
    const resultado = Number(this.state.numero1)  + Number(this.state.numero2);
    this.setState({resultado: resultado }) 
  }

  render() {
    return <div>
          <label> Número 1: </label>
          <input type="text" value={this.state.numero1} 
            onChange={(e) => this.setState({numero1 : e.target.value})} />
          <br/>


          <label> Número 2: </label>
          <input type="text" value={this.state.numero2} 
            onChange={(e) => this.setState({numero2 : e.target.value})} />
          <br/>

          
          <button onClick={this.somar} >Somar</button>
          O resultado é : { this.state.resultado}
          <hr>
          </hr>

                    
      </div>;
  }
}

export default App;
