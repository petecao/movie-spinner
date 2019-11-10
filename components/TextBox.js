const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const buttonStyle = {
  backgroundColor: "rgb(255, 87, 51)", /* Green */
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px"
}

class TextBox extends React.Component {
    wheelSpun = false;
    constructor(props) {
        super(props);
        this.state = {count: '', movies: [], chosenMovie: "", movie: ""};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.spinWheel = this.spinWheel.bind(this);
        this.clear = this.clear.bind(this);
      }

      
    handleChange(event) {
        this.setState({count: event.target.value});
      }

    handleSubmit(event) {
        this.setState({movies: [ ...this.state.movies, this.state.count + " "]});
        //this.setState({movie: "Successfuly entered {this.state.count} !"});
        event.preventDefault();
    }
    
    spinWheel() {
      if(this.state.movies.length > 0 && !this.wheelSpun) {
        console.log(this.state.movies[Math.floor(Math.random()*this.state.movies.length)]);
        this.setState({chosenMovie: this.state.movies[Math.floor(Math.random()*this.state.movies.length)]});
        this.wheelSpun = true;
      }
    }

    clear() {
      this.setState({movies: []});
      this.setState({chosenMovie: ""});
      this.wheelSpun = false;
    }

      render() {
        return (
            <div>
            
          <form onSubmit={this.handleSubmit} style = {{fontSize: "3em", textAlign: "center"}}>
             Type in a movie: <input placeholder = "" type="text" name="movieChoice" onChange = {this.handleChange} ></input>
             <input type="submit" value="Submit" />
          </form>
            
            <ol style = {{textAlign: "center", listStylePosition: "inside", fontSize: "2em"}}>
            {this.state.movies.map((movie) => {
              return <li style = {{textAlign: "center"}}><b>{movie}</b></li>
            })}  
            </ol>

            <button onClick={this.spinWheel} style={buttonStyle}>Spin! That! Wheel!</button>
            <button onClick = {this.clear} style={buttonStyle}>Clear Choices</button>
            
            <h1 style = {{textAlign: "center"}}>You will be watching: <em>{this.state.chosenMovie}</em></h1>
            
          </div>
        ) 
      }
    }

export default TextBox;