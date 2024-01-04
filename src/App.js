import React from "react";

class App extends React.Component {
  state = {};
  render() {
    const linkStyle = {
      color: "rgb(200, 100, 100)",
      textDecoration: "none",
      fontSize: "20px"
    };
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          zIndex: "1",
          overflow: "hidden",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "20px",
          marginBottom: "auto"
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://nickcarducci.com">
            nickcarducci.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://carducci.vercel.app">
            carducci.vercel.app
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://thumbprint.us">
            thumbprint.us
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://wavv.art">
            wavv.art
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://tpt.net.co">
            tpt.net.co
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://book.com.co">
            book.com.co
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://scopes.cc">
            scopes.cc
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://saverparty.com">
            saverparty.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://vaults.biz">
            vaults.biz
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://micro-theory.com">
            micro-theory.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://salt.net.co">
            salt.net.co
          </a>
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
export default App;
