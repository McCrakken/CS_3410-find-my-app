import React from 'react';

const DegreeForm = (props) => {
  return(
    <form onSubmit={props.onSubmit} onChange={props.onChange}>
      <h3>Add Class</h3>
      <div className="form-group">
        <input type="text" className="form-control" id="title" placeholder="Event title"/>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="text" placeholder="Event description"/>
      </div>
      <button type="submit" onClick={props.addNew} className="btnSize">Submit</button>
    </form>
  );
};

export default DegreeForm;