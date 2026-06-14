"use client"
import Column from './Column';
import * as React from 'react';
import { DragDropContext, Droppable} from '@hello-pangea/dnd';
import {Button } from '@mui/material';
import { useState, useEffect } from 'react';






  



export default function KanbanBoard() {

const [newColumnTitle, setNewColumnTitle] = useState("");
          const [columns, setColumns] = useState([
  { id: Date.now().toString(), title: "", tasks: [] },

]);

const addTask = (columnId, content) => {
  const newTask = { id: Date.now(), title: "", content, completed: false, color: "black" };
  
setColumns(prev => prev.map(col => 
  col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
));


}



const addColumn = ( content) => {
  const newColumn = { id: Date.now(), title: "", content, tasks: [], color: "black"};
  setColumns(prev => [...prev, newColumn]);
}

const editColumnTitle = (id, newTitle) => {
 const update = (list ) =>
  list.map((col) => col.id === id ? { ...col, title: newTitle } : col);
  setColumns(prev => prev.map(col => 
  col.id === id ? { ...col, title: newTitle } : col
  ));
}





const editTask = (id, newTitle, columnId) => {
  setColumns(prev => prev.map(col => 
  col.id === columnId ? {...col, tasks: col.tasks.map(task => task.id === id ? { ...task, title: newTitle } : task)} : col));

}

const deleteTask = (id, columnId) => {
  const remove = (list) => 
    list.filter((task) => task.id != id );
  setColumns(prev => prev.map(col => 
    col.id === columnId ? { ...col, tasks: remove(col.tasks) } : col
  ));

};

const editTaskContent = (id, newContent, columnId) => {
  const update = (list ) =>
   list.map((task) => task.id === id ? { ...task, content: newContent } : task);
 setColumns(prev => prev.map(col => 
  col.id === columnId ? { ...col, tasks: [...col.tasks, newContent] } : col));

}





function handleDragEnd(snapshot, index) {
  console.log(snapshot);
const { source, destination } = snapshot;
  if (!destination)return;

 if (source.droppableId !== destination.droppableId) {
   const tasks = columns.find(col => col.id === source.droppableId).tasks[source.index];
  const newDestinationList = Array.from(columns.find(col => col.id === destination.droppableId).tasks);
  const newSourceList = Array.from(columns.find(col => col.id === source.droppableId).tasks[source.index]);
  newSourceList.splice(source.index, 1);
  newDestinationList.splice(destination.index, 0, tasks);
  
  setColumns(prev => prev.map(col => 
   (col.id === source.droppableId)  ? { ...col, tasks: newSourceList } : 
  (col.id === destination.droppableId) ? { ...col, tasks: newDestinationList } : col
  ));
 }


}

      return(
       
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 style={{textAlign: "center", backgroundColor: "black"}}>Progress Board</h2>
               <Button variant="contained" size="small" color="red" onClick={() =>  { setColumns(prev => [...prev, { id: Date.now().toString(), title: "", tasks: [] }]);
  }}>    new column 
            </Button>
         
       
          <div style={{
  display: "flex",
  flexDirection: "row",
  overflowX: "scroll",
  overflowY: "scroll",
  gap: "16px",
  padding: "16px"
,backgroundColor: "white",
}}>
              {columns.map(col => (
  <Column key={col.id} title={col.title} tasks={col.tasks} id={col.id} 
    editTask={editTask} 
    addTask={addTask} 
    editTaskContent={editTaskContent} 
    deleteTask={deleteTask}
    editColumnTitle={editColumnTitle}
  />
))}
            </div>
        </DragDropContext>






      );
    }
  