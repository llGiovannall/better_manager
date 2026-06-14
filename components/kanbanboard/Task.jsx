"use client";

import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import styled from 'styled-components';
import {  Avatar, Button } from '@mui/material';

const TaskContainer = styled.div`
background-color: black;
border-radius: 10px;
padding: 8px;
margin-bottom: 8px;
margin-left: 8px;
margin-right: 8px;
border: 1px solid #06d0ef;
min-height: 90px;
cursor: pointer;
display: flex;


`;
const TextContent = styled.div`
display: flex;
color: black;
`;
const Icons = styled.div`
display: flex;
justify-content: end;
padding: 2px;
`;

function bgcolorChange(props){
  if (props.isDragging) return "#dfec8b";
  if (props.isBackLog) return "#df84c2";
  return "#aeea80";
}




export default function Task({ task, index, editTask, editTaskContent, deleteTask, ColumnId }) {
  return (<Draggable draggableId={ `${task.id}` } key={task.id} index={index}> 
{( provided, snapshot ) => ( <TaskContainer
{...provided.draggableProps}
{...provided.dragHandleProps}
ref={provided.innerRef}
style={{
    ...provided.draggableProps.style,
    backgroundColor: snapshot.isDragging ? "#dfec8b" : "white"
  }}
>
    <div style={{display: "flex", flexDirection: "column", justifyContent: "start", padding: 2, color: "black"}}>
<input type="text"  value={task.title} onChange={(e) => editTask(task.id, e.target.value, ColumnId)} style={{border: "none", backgroundColor: "transparent", fontSize: 14, color: "black"}}/>

<div style={{display: "flex", flexDirection: "column", justifyContent: "start", padding: 2, color: "black"}}>
<input type="text" value={task.content} onChange={(e) => editTaskContent(task.id, e.target.value, ColumnId)} style={{border: "none", backgroundColor: "transparent", fontSize: 14, color: "black"}}/>

<Button color="red" onClick={() => {
  console.log("Delete task:", task.id);
  deleteTask(task.id, ColumnId);
}}> Delete</Button>


</div> 
</div>

<div style={{ display: "flex", justifyContent: "end", padding: 2 }}>
    <Avatar onClick={() => console.log(task)} src={"" + task.id}/>
</div>
{provided.placeholder}
</TaskContainer>
)}
  </Draggable>
  );

}