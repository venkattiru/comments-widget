import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [comments, setComments]= useState([]);
  const [name, setName] = useState('');
 const [text, setText] = useState('');
 

  const handleComments = () => {
    
    return(
      comments.map((obj) => {
        return (<div data-id={obj.id} key={obj.id}>
          <p>{obj.name}</p>
          <p>{obj?.comment}</p>
          <button onClick={saveLikes} className={obj.like? 'liked-text' : 'text'} data-id={obj.id}>Like {obj.like > 0 ? obj.like : ''}</button>
          <button data-id={obj.id} onClick={handleReply}>Reply</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        )
      })
    );
  }
  
 const saveLikes = (e) => {
  const id = e.target.dataset.id;
  const commentVar = comments[id];
  commentVar.like =1;
  const cloneComments = [...comments];
  cloneComments.splice(parseInt(id));
   setComments([...cloneComments, commentVar ]);
  
 }

 const handleDelete = () => {

 }

 const handleReply = (e) => {
const cloneComments = [...comments];
const id = e.target.dataset.id;
const id_new = `${id}-1`;

 }

  const saveComment = () => {
    const id = comments.length
    const arr = [...comments];
    const  commentObj = {
      comment: text,
      name,
      id,
    }
    arr.push(commentObj);
    
    setComments(arr);
    setName('');
    setText('');
    
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <div className='comment-box'>
        <div style={{padding: 10}}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' onChange={handleName} value={name}></input>
        </div>
        
      
    <textarea className='comment-area' onChange={e => setText(e.target.value)} value={text}></textarea>
      
      <button onClick={saveComment}>Comment</button>
      </div>
      <div>
        <div className='comments-display'>
        {handleComments()}
        </div>
      </div>
    </div>
  );
}

export default App;
