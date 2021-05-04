export function Main({ children }) {
  return (
    <div>
      <div className="circle" style={style.circleTop}></div>
      {children}
      <div className="circle" style={style.circleBottom}></div>
    </div>
  );
}

export function DeviceView({ number }) {
  return (
    <div>
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
    marginTop: -30,
    textAlign: "center",
    color: "#fff",
    lineHeight: 1,
    fontWeight: 600,
    fontSize: 24
  },

  numberContent: {
    fontSize: 120,
    fontWeight: 400,
    marginBottom: 0,
    color: "#fff"
  }
};
