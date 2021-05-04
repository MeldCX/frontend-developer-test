import React from 'react'

export function Button({ onClick, buttonLabel, className, style, id }) {
  return (
    <button id={id} onClick={onClick} style={style} className={className}>
      {buttonLabel}
    </button>
  );
}

export function Input({ type, placeholder, className, style, onChange, icon }) {
  const icon_path = `/assets/icons/${icon}.svg`;

  return (
    <div style={{ height: 60 }}>
      <img style={styles.inputIcons} src={icon_path} alt="icons" />
      <input
        type={type}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        style={style}
      />
    </div>
  );
}

export function Notification({ message, style, delay }) {
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setVisible((prevState) => {
        return !prevState;
      })
    }, delay)
    
  }, [delay])
  
  return (
    <div style={{backgroundColor:"white", display:visible ? "flex" : "none", justifyContent:"center", marginTop:50}}>
      <h1 style={style}>{message}</h1>
    </div>
  )
}

const styles = {
  inputIcons: {
    position: "relative",
    top: 41,
    left: "-50%",
    width: 20,
    margin: 0
  }
};
