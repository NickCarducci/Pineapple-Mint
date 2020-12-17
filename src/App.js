import React from "react";
import Portfolio from "./Portfolio";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowScroll: true,
      off: window.innerWidth < 500,
      width: window.innerWidth,
      height: window.innerHeight
    };
    this.size = React.createRef();
  }
  componentDidUpdate = () => {
    if (this.state.width !== this.state.lastWidth) {
      this.state.off && this.setState({ off: false });
      clearTimeout(this.widthUpdate);
      this.widthUpdate = setTimeout(() => {
        this.setState({
          lastWidth: this.state.width,
          off: this.state.width < 500
        });
      }, 300);
    }
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };
  handleResize = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      let width = window.innerWidth; // * 0.01;
      let height = window.innerHeight; // * 0.01;
      document.documentElement.style.setProperty("--vw", `${width}px`);
      document.documentElement.style.setProperty("--vh", `${height}px`);
      width = window.innerWidth;
      height = window.innerHeight;
      this.setState({
        width,
        height
      });
    }, 200);
  };
  componentDidUpdate = () => {
    if (
      !this.state.sizeListenerMounted &&
      this.state.potentialScroll !== this.state.lastPotentialScroll
    ) {
      if (this.size && this.size.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          if (this.size.current) {
            for (let entry of entries) {
              var size = this.size.current.offsetHeight; //entry.target.offsetHeight;

              if (size > window.innerHeight * 0.35) {
                !this.state.scrolling && this.setState({ scrolling: true });
              }
            }
          }
        });

        resizeObserver.observe(this.size.current);
        this.setState({ sizeListenerMounted: true });
      }
      this.setState({ lastPotentialScroll: this.state.potentialScroll });
    }
    if (this.state.scrolling !== this.state.lastScrolling) {
      if (!this.state.scrolling) {
        setTimeout(() => this.setState({ allowScroll: true }), 3000);
      }
      this.setState({ lastScrolling: this.state.scrolling });
    }
  };
  render() {
    var pineapple =
      "https://www.dl.dropboxusercontent.com/s/b39nuagbp7cceju/pineapple-mint.png?dl=0";
    return (
      <div
        onMouseEnter={() =>
          this.state.allowScroll && this.setState({ potentialScroll: true })
        }
        onMouseLeave={() => this.setState({ potentialScroll: false })}
        className="App"
      >
        <div
          ref={this.size}
          style={{
            backgroundColor: this.state.scrolling ? "rgba(20,20,20,.3)" : "",
            opacity: this.state.scrolling ? "0" : "1",
            zIndex: this.state.scrolling ? "-9999" : "",
            marginTop: this.state.scrolling ? "0px" : "auto",
            maxHeight: this.state.scrolling ? "0%" : "40%",
            height: this.state.potentialScroll ? "100%" : "113px",
            top: this.state.potentialScroll ? "10px" : "0",
            transition: this.state.scrolling ? ".3s" : "3s ease-in"
          }}
        >
          <img
            style={{
              top: "5%",
              zIndex: this.state.off ? "-9999" : "1",
              transition: ".3s ease-in",
              opacity: this.state.width < 500 ? "0" : "1",
              maxWidth: "50vh",
              width: `30vw`,
              display: "flex",
              right: "-5vh",
              position: "absolute",
              transform: "rotate(20deg)"
            }}
            alt="pineapple-big"
            src={pineapple}
          />
          <img
            style={{
              width: "30px"
            }}
            alt="pineapple"
            src={pineapple}
          />
          <h1>Pineapple-mint.com</h1>
          experiences / tools
        </div>
        <Portfolio />
        <div
          onClick={
            this.state.scrolling
              ? () =>
                  this.setState({
                    scrolling: false,
                    allowScroll: false,
                    potentialScroll: false
                  })
              : () => this.setState({ potentialScroll: false })
          }
          style={{
            alignSelf: this.state.scrolling ? "flex-end" : "",
            border: "1px solid",
            opacity:
              this.state.scrolling || this.state.potentialScroll ? "1" : "0",
            height:
              this.state.scrolling || this.state.potentialScroll ? "40px" : "0",
            width:
              this.state.scrolling || this.state.potentialScroll ? "40px" : "0"
          }}
        >
          &times;
        </div>
      </div>
    );
  }
}
export default App;
