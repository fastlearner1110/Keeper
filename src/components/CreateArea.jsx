import React, { useState } from "react";

function CreateArea() {
  let [input, setInput] = useState("");
  let [note, setNote] = useState({
    title: "",
    content: ""
  });
  let [noteArea, setNoteArea] = useState([]);
  let handleChange = (event) => {
    let { name, value } = event.target;
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  let handleClick = (event) => {
    event.preventDefault;
    setNoteArea((preValue) => {
      return [...preValue, note];
    });
  };
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
