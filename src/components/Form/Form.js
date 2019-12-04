import React from 'react';

const Form = (props) => {
  return(
    <form onSubmit={props.onSubmit} onChange={props.onChange}>
      <h3>Add Event</h3>
      <div className="form-group">
        <input type="text" className="form-control" id="title" placeholder="Event title"/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="text" placeholder="Event description"/>
      </div>
      <button type="submit" onClick={props.addNew} className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;