import TextBox from "../components/TextBox";

const bodyStyle = {
  backgroundImage: "url('https://wallpapertag.com/wallpaper/full/0/5/e/479214-cool-color-backgrounds-1920x1200-samsung.jpg')",
  backgroundRepeat: "no-repeat center fixed",
  backgroundSize: "cover",
  textAlign: "center",
  fontFamily: 'Candara'
  //border: "90px solid #000000"
}

const h1Style = {
  fontSize: "800%",
  color: "(0, 0, 0)",
  textShadow: "8px 8px rgb(255, 87, 51)"
}

const h2Style = {
  fontSize: "600%",
  color: "rgb(255, 87, 51)",
  textShadow: "8px 8px rgb(0, 0, 0)"
}


class App extends React.Component {
    
      render() {
        return (
          <body style = {bodyStyle}>
          <h1 style = {h1Style}>Turntable Television</h1>
          <h2 style = {h2Style}>What Do You Want To Watch?</h2>
          <div>
            <TextBox />
          </div>
          </body>
        )
      }
    }

export default App;    