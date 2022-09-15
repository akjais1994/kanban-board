import React, { useState } from 'react'
import './index.scss';

const CreateTasksInput = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState('');
  
  const submitTask = () => {
    const card = { taskText: inputValue, listNumber: 0, cardId: new Date().valueOf()};
    setInputValue('');
    setTaskList(prev => {
      const taskList = [...prev];
      const cards = [...taskList[0].cards];
      cards.push(card);
      taskList[0].cards = cards;
      return taskList;
    });
  }

  const handleInput = e => setInputValue(e.target.value);
  return (
    <div className='create-task-container'>
      <label htmlFor="create-task">Create Tasks</label>
      <input className="create-task-input" id="create-task" type="text" value={inputValue} onChange={handleInput} />
      <button className='submitTask' onClick={submitTask} disabled={!inputValue} >Create Task</button>
    </div>
  )
}

export default CreateTasksInput;