import React from 'react'
const Container = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-8 col-xs-push-2">
          <h1 className="text-center title">Decimal Converter</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Container