import React from "react";

const InputForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Input task here:
        <input type="text" value={props.value} onChange={props.handleChange} />
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default InputForm;
