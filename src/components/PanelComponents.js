import React from "react";

export function Main({ children }) {
  return (
    <div className="circle" style={style.circleBottom}></div>
  );
}

export function DeviceView({ number }) {
  const [circles, setCircles] = React.useState([...Array(number).keys()])
  
  // create temp array
  React.useEffect(() => {
    console.log(number)
    setCircles(() => {
      return [...Array(number).keys(), number+1]
    });
  }, [number])

  return (
    <div className="animated-element">
      {
        circles.map((data) => (<span key={data} className="circle-element"></span>))
      }
      <p style={style.numberContent}>{number}</p>
      <h4 style={style.deviceContent}>
        DEVICES
        <br />
        ONLINE
      </h4>
    </div>
  );
}

export function ControlNav({ children }) {
  return <div style={style.controlNav}>{children}</div>;
}

const style = {
  controlNav: {
    backgroundColor: "#D76845",
    height: 80,
    paddingTop: 20,
    width: "100%"
  },

  circleTop: {
    position: "relative",
    top: 90,
    left: "60%"
  },

  circleBottom: {
    position: "relative",
    top: 20,
    left: "35%"
  },

  deviceContent: {
    marginTop: -100,
    textAlign: "center",
    color: "#fff",
    lineHeight: 1,
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 0
  },

  numberContent: {
    fontSize: 120,
    fontWeight: 400,
    top: 50,
    position: "relative",
    color: "#fff"
  }
};
