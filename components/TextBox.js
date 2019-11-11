
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const buttonStyle = {
  backgroundColor: "rgb(255, 87, 51)", 
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
        this.state = {count: '', movies: [], chosenMovie: "", movie: "", imgsrc: ""};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.spinWheel = this.spinWheel.bind(this);
        this.clear = this.clear.bind(this);
      }

      
    handleChange(event) {
        this.setState({count: event.target.value});
      }

    handleSubmit(event) { //TODO: Make the textbox clear after submission
        this.setState({movies: [ ...this.state.movies, this.state.count + " "]});
        //this.setState({movie: "Successfuly entered {this.state.count} !"});
        event.preventDefault();
    }
    
    spinWheel() {
      if(this.state.movies.length > 0 && !this.wheelSpun) {
        //console.log(this.state.movies[Math.floor(Math.random()*this.state.movies.length)]);
        var randMovie = this.state.movies[Math.floor(Math.random()*this.state.movies.length)];
        this.setState({chosenMovie: randMovie});

        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + randMovie + "&callback=?", false ); // false for synchronous request
        xmlHttp.send( null );

        var JSONString = xmlHttp.responseText.substring(2, xmlHttp.responseText.length - 1);
        //console.log(JSONString);
        var movieJSON = JSON.parse(JSONString);
        console.log(movieJSON.results[0].poster_path);

        this.setState({imgsrc: "http://image.tmdb.org/t/p/w500" + movieJSON.results[0].poster_path});
        
        
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
            <img src = {this.state.imgsrc}></img>
          </div>
        ) 
      }
    }

export default TextBox;
