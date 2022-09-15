import React from 'react'
import Card from '../Card';
import './index.scss';

const List = ({ title, cards, setTaskList, taskList, id }) => {
  const allowDrop = (e) => {
    e.preventDefault();
  }

  const onDropEvent = (e) => {
    e.preventDefault();
    // console.log("🚀 ~ file: index.jsx ~ line 14 ~ onDropEvent ~ onDropEvent", JSON.parse(e.dataTransfer.getData("card")));
    // console.log('task - ', id);
    console.log(e.target);
    let data = e.dataTransfer.getData('card');
    console.log("🚀 ~ file: index.jsx ~ line 16 ~ onDropEvent ~ data", JSON.parse(data))
    // e.target.appendChild(document.getElementById(data));
  }
  return (
    <div className='listContainer' onDrop={onDropEvent} onDragOver={allowDrop}>
      <header className="listHeader">{title}</header>
      <section className='list'>
      {
        cards.map((card, index) => {
          return (<Card setTaskList={setTaskList} {...card} key={card.cardId} taskList={taskList} />)
        })
      }
      </section>
    </div>
  )
}

export default List;