import React ,{useState} from 'react';
const AddTodo = (props) => {
  const [title,settitle]=useState("");
  const [desc, setdesc] = useState("");
  const submit=(e)=>
  {
       e.preventDefault();
       if(!title || !desc)
       {
         alert("title or description cannot be blank")
       }
       props.addTodo(title,desc);
  }
    return (
        <div className="container my-3">
        <h3>Add a todo</h3>
          <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>
    {
      settitle(e.target.value)
    }}   class="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="desc " class="form-label">Todo Description</label>
    <input type="text"value={desc}onChange={
      (e)=>
      {
        setdesc(e.target.value)
      }
    } class="form-control" id="desc"/>
  </div>
  
  <button type="submit" class="btn btn-sm btn-success">Add todo</button>
</form>  
        </div>
    )
}

export default AddTodo;
