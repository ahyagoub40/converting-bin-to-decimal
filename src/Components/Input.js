import React from 'react';

const InputBox = props => {
  return (
    <form className="text-center">
      <div className="form-group">
        <label className="radio-inline">
          <input type="radio"
            onClick={() => props.radioHandler("d2b")}
            checked={props.state.conversionType === "d2b"}
          />Base(10) to Binary
				</label>
        <label className="radio-inline">
          <input type="radio"
            onClick={() => props.radioHandler("b2d")}
            checked={props.state.conversionType === "b2d"}
          />Binary to Base(10)
				</label>
      </div>
      <div className="form-group">
        <input type="number"
          onChange={ev => props.inputHandler(ev.target.value)}
          className="form-control text-center inputForm"
          placeholder="Value to Convert"
          value={props.state.value}
        />
      </div>
    </form>
  );
}

export default InputBox