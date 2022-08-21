import React from 'react'

const Button = (props) => {
  return (
    <>
      <div className={props.className[0]}>
        <div className={props.className[1]}>
          <img src={props.icon} alt={props.alt} />
        </div>
        <button className={props.className[2]}>{props.alt.toUpperCase()}</button>
      </div>
    </>
  );
}

export default Button