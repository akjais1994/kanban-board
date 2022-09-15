import React from 'react'
import './index.scss';

const Card = ({ taskText, listNumber, cardId, setTaskList, taskList }) => {
  // const [first, setfirst] = useState('');

  const handleDelete = () => {
    const newTaskList = [...taskList];
    const taskIndex = newTaskList.findIndex(task => task.id === listNumber);
    const newCurrentCards = newTaskList[taskIndex].cards.filter(card => card.cardId !== cardId);
    newTaskList[taskIndex].cards = newCurrentCards;
    return {newTaskList, taskIndex};
  }

  const handleDeleteCta = () => {
    setTaskList(handleDelete().newTaskList);
  }

  const handleTaskMovement = sign => {
    const card = {
      listNumber: listNumber + sign,
      taskText,
      cardId,
    }
    const {newTaskList,  taskIndex} = handleDelete();
    const newNextCards = [...newTaskList[taskIndex+sign].cards];
    newNextCards.push(card);
    newTaskList[taskIndex+sign].cards = newNextCards;
    setTaskList(newTaskList);
  }

  const dragCard = (e) => {
    console.log("🚀 ~ file: index.jsx ~ line 35 ~ dragCard ~ dragCard", e)
    e.dataTransfer.setData("card", JSON.stringify({cardId, listNumber}));
  }

  // const updateFirstState = () => {
  //   // setfirst(prev => {
  //   //   console.log('>>>> first');
  //   //   return prev + 'data';
  //   // })
  //   setfirst('abc');
  // }

  // console.log('>>>> first', first);

  return (
    <div className="container" draggable="true" onDragStart={dragCard} id={cardId}>
      <header><h5>{taskText}</h5></header>
      <section className='card-body'>
        <button className="prev" onClick={() => handleTaskMovement(-1)} disabled={listNumber === 0}>Prev</button>
        <button className="next" onClick={() => handleTaskMovement(1)} disabled={listNumber === taskList.length - 1}>Next</button>
        <button className="delete" onClick={handleDeleteCta}>Delete</button>
        {/* <button onClick={updateFirstState}>Update state</button> */}
      </section>
    </div>
  )
}

export default Card