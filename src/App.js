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
      this.setState(
        {
          lastWidth: this.state.width,
          off: this.state.width < 500
        },
        () => {
          clearTimeout(this.widthUpdate);
          this.widthUpdate = setTimeout(() => {
            this.setState({
              lastWidth: this.state.width,
              off: this.state.width < 500
            });
          }, 300);
        }
      );
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

      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }, 200);
  };
  componentDidUpdate = () => {
    const { scrolling, potentialScroll } = this.state;
    if (
      !this.state.sizeListenerMounted &&
      potentialScroll !== this.state.lastPotentialScroll
    ) {
      if (this.size && this.size.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          if (this.size.current) {
            for (let entry of entries) {
              var size = entry.target.offsetHeight;
              //var size = this.size.current.offsetHeight;

              if (size > window.innerHeight * 0.35) {
                !scrolling && this.setState({ scrolling: true });
              }
            }
          }
        });

        resizeObserver.observe(this.size.current);
        this.setState({ sizeListenerMounted: true });
      }
      this.setState({ lastPotentialScroll: potentialScroll });
    }
    if (scrolling !== this.state.lastScrolling) {
      if (!scrolling) {
        setTimeout(() => this.setState({ allowScroll: true }), 3000);
      }
      this.setState({ lastScrolling: scrolling });
    }
  };
  render() {
    const { scrolling, potentialScroll } = this.state;
    var pineapple =
      "https://www.dl.dropboxusercontent.com/s/b39nuagbp7cceju/pineapple-mint.png?dl=0";
    const snapStyle = {
      opacity: scrolling ? 0.2 : 0.7,
      backgroundColor: scrolling ? "rgba(20,20,20,.3)" : "",
      marginTop: scrolling ? "0px" : "auto",
      maxHeight: scrolling ? "0%" : "40%",
      height: potentialScroll ? "100%" : "113px",
      top: potentialScroll ? "10px" : "0",
      transition: scrolling ? ".3s" : "3s ease-in"
    };
    return (
      <div
        onMouseEnter={() =>
          this.state.allowScroll && this.setState({ potentialScroll: true })
        }
        onMouseLeave={() => this.setState({ potentialScroll: false })}
        className="App"
      >
        <div ref={this.size} style={snapStyle}>
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
        <Portfolio scrolling={scrolling} />
        <div
          onClick={
            scrolling
              ? () =>
                  this.setState({
                    scrolling: false,
                    allowScroll: false,
                    potentialScroll: false
                  })
              : () => this.setState({ potentialScroll: false })
          }
          style={{
            alignSelf: scrolling ? "flex-end" : "",
            border: "1px solid",
            opacity: scrolling || potentialScroll ? "1" : "0",
            height: scrolling || potentialScroll ? "40px" : "0",
            width: scrolling || potentialScroll ? "40px" : "0"
          }}
        >
          &times;
        </div>
      </div>
    );
  }
}
export default App;
