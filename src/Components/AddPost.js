import { useState } from "react";

const AddPost = ({onCreate}) => {

const [value, setValue] = useState('')

function sumbitHandler(event){
  event.preventDefault()

  if(value.trim()){
    onCreate(value)
    setValue('')
  }
}

  return (
    <form className="Additem" onSubmit={sumbitHandler}>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Name..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;
