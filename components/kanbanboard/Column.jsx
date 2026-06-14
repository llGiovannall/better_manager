import {React}from 'react';
import { Droppable } from '@hello-pangea/dnd';
import styled from 'styled-components';
import Task from './Task';
import {Button } from '@mui/material';
import { useState } from 'react';

const Container = styled.div`
  background-color: #EBEBEB;
  border-radius: 2.5px;
  height: 475px;
  overflow-y: scroll;
  width: 300px;
  border: 1px solid #0000;
flex-shrink: 0;
`;

const Title = styled.h3`
padding: 8px;
background-color: #9e0000;
color: black;
display: flex;
align-items: center;
justify-content: space-between;

`;

const TaskList = styled.div`
  padding: 8px;
  min-height: 100px;
  background-color: ${(props) => props.$isDraggingOver ? '#e8f5e9' : 'transparent'};
`;

export default function Column({ title, tasks, id, editTask, addTask, editTaskContent, deleteTask, editColumnTitle }) {
  const [mostrar, setMostrar] = useState(false);
const [newTaskTitle, setNewTaskTitle] = useState("");
const [newTaskContent, setNewTaskContent] = useState("");
const [deleteTaskId, setDeleteTaskId] = useState("");
const [newColumnTitle, setNewColumnTitle] = useState(title); 



  return (
    <Container className='column'>
      <Title style={{ position: 'sticky', top: 0 }}>
               <div style={{ padding: 4}}>
             <input  
             placeholder="Nome da coluna..." 
             value={newColumnTitle} 
             onChange={(e) => {
              setNewColumnTitle(e.target.value)
            }} 
            onBlur={() => editColumnTitle(id, newColumnTitle)} 
            style={{border: "none", backgroundColor: "transparent", fontSize: 16, fontWeight: "bold", color: "black"}}/>
             </div>
            </Title>
        <Button variant="contained" size="small" 
         style={{alignSelf: "start", marginRight: 8, color: "black", backgroundColor: "#9e0000"}}
            onClick={() => setMostrar(!mostrar)}>
          +
 </Button>
        {mostrar && (
           <div style={{ padding: 8, color: "black"}}>
          <input
            placeholder="Nome da task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          
          <input
            placeholder="Content da task..."
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
          />
         

           <Button variant="contained" size="small" color="red" onClick={() =>  { addTask(id, newTaskTitle, newTaskContent);
  setNewTaskTitle("");
  setNewTaskContent("");
  setMostrar(false);}}>
              new task
            </Button>
           

                       </div>
                       
        )}


      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
          ref = {provided.innerRef}
          {...provided.droppableProps}
          $isDraggingOver={snapshot.isDraggingOver}
          
         > {tasks.map((task, index) => (
              <Task key={index} task={task} index={index} editTask={editTask} editTaskContent={editTaskContent} deleteTask={deleteTask} ColumnId={id}/>
            ))}
            
            {provided.placeholder}

          </TaskList>
        
          )}
      </Droppable>
    </Container>
  );
}