import React from "react";

export function Circles() {
  return (
    <span className="circle-element"></span>
  );
}


// Set the main content
export function DeviceView({ number }) {
  const [circles, setCircles] = React.useState([])

  React.useEffect(() => {
    console.log('Render:', number)
    setCircles((prevState) => {
      prevState = [...Array(number).keys()]
      console.log('Updated:', prevState.length)
      return prevState
    })

    return () => {
      setCircles([...Array(number).keys()])
    }
  }, [number])

  return (
    <div className="animated-element">
      {
        circles.map((data) => {
          return(
            <div key={data} className="holder-animate">
              <span style={{transform:`rotate(${(data*30)}deg)`}} className="circle-element">{data}</span>
            </div>
          )
        })
      }
      <p style={style.numberContent}>{!number ? <small style={{fontSize:16}}>Calculating...</small> : number}</p>
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
