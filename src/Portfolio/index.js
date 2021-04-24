import React from "react";

class Portfolio extends React.Component {
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
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://2052.live">
            2052.live
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://carducci.sh">
            carducci.sh
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
          <a style={linkStyle} href="https://froth.app">
            froth.app
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
          <a style={linkStyle} href="https://saverparty.xyz">
            saverparty.xyz
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
          <a style={linkStyle} href="https://nationalsecuritycasino.com">
            nationalsecuritycasino.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://browser.glass">
            browser.glass
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://3under2.us">
            3under2.us
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://30under5.us">
            30under5.us
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://squatcommune.com">
            squatcommune.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://billbiden.org">
            billbiden.org
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://equityutilitymoney.com">
            equityutilitymoney.com
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a style={linkStyle} href="https://residualsplit.us">
            residualsplit.us
          </a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "max-content"
          }}
        >
          <a
            style={linkStyle}
            href="https://https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721"
          >
            keybox.email
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
export default Portfolio;
