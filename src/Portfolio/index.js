import React from "react";

class Portfolio extends React.Component {
  state = {};
  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          zIndex: "1",
          overflow: "hidden",
          height: this.props.scrolling ? "min-content" : "0px",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "20px",
          marginBottom: "auto"
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://carducci.sh">carducci.sh</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://thumbprint.us">thumbprint.us</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://wavv.art">wavv.art</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://froth.app">froth.app</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://book.com.co">book.com.co</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://scopes.cc">scopes.cc</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://saverparty.xyz">saverparty.xyz</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://vaults.biz">vaults.biz</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://micro-theory.com">micro-theory.com</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://nationalsecuritycasino.com">
            nationalsecuritycasino.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <a href="https://browser.glass">browser.glass</a>
        </div>
        {this.state.hoverURL && (
          <iframe
            src={this.state.hoverURL}
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title={this.state.hoverURL}
          />
        )}
      </div>
    );
  }
}
export default Portfolio;
