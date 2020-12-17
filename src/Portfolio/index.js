import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          zIndex: "1",
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
          <iframe
            src="https://wavv.art"
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title="wavv.art"
          />
          <a href="https://wavv.art">wavv.art</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <iframe
            src="https://froth.app"
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title="froth.app"
          />
          <a href="https://froth.app">froth.app</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <iframe
            src="https://book.com.co"
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title="book.com.co"
          />
          <a href="https://book.com.co">book.com.co</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <iframe
            src="https://scopes.cc"
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title="scopes.cc"
          />
          <a href="https://scopes.cc">scopes.cc</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <iframe
            src="https://saverparty.xyz"
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title="saverparty.xyz"
          />
          <a href="https://saverparty.xyz">saverparty.xyz</a>
        </div>
        <div
          style={{
            margin: "10px",
            width: "160px"
          }}
        >
          <iframe
            src="https://vaults.biz"
            style={{
              border: "3px solid black",
              borderRadius: "20px",
              height: "100px",
              width: "100%"
            }}
            title="vaults.biz"
          />
          <a href="https://vaults.biz">vaults.biz</a>
        </div>
      </div>
    );
  }
}
export default Portfolio;
