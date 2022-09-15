import React, { useState } from 'react'
// import Card from '../Card';
import CreateTasksInput from '../CreateTasks';
import List from '../List';
import './index.scss';

const tasks = [
  {
    title: 'todo',
    id: 0,
    cards: [
      {
        taskText: 'default tesk 1',
        listNumber: 0,
        cardId: 0,
      },
      {
        taskText: 'default tesk 2',
        listNumber: 0,
        cardId: 1,
      },
      {
        taskText: 'default tesk 9',
        listNumber: 0,
        cardId: 9,
      },
    ],
  },
  {
    title: 'dev in progress',
    id: 1,
    cards: [
      {
        taskText: 'default tesk 3',
        listNumber: 1,
        cardId: 2,
      },
      {
        taskText: 'default tesk 4',
        listNumber: 1,
        cardId: 3,
      },
      {
        taskText: 'default tesk 13',
        listNumber: 1,
        cardId: 13,
      },
    ],
  },
  {
    title: 'dev done',
    id: 2,
    cards: [
      {
        taskText: 'default tesk 5',
        listNumber: 2,
        cardId: 4,
      },
      {
        taskText: 'default tesk 6',
        listNumber: 2,
        cardId: 5,
      },
      {
        taskText: 'default tesk 16',
        listNumber: 2,
        cardId: 15,
      },
    ],
  },
];

const Board = () => {

  const [taskList, setTaskList] = useState(tasks);

  return (
    <div>
      <h3>Board</h3>
      <CreateTasksInput setTaskList={setTaskList} />
      <div className='boardContainer'>
      {
        taskList.map((list, index) => <List taskList={taskList} setTaskList={setTaskList} {...list} key={list.id} />)
      }
      </div>
    </div>
  )
}

export default Board;
