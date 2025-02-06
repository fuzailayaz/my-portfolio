import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  todo: [
    { id: '1', content: 'Learn React' },
    { id: '2', content: 'Learn JavaScript' },
  ],
  inProgress: [
    { id: '3', content: 'Build a project' },
  ],
  done: [
    { id: '4', content: 'Deploy the app' },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const sourceItems = [...sourceColumn];
    const destItems = [...destColumn];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {Object.keys(tasks).map((columnId) => (
          <Droppable key={columnId} droppableId={columnId} isDropDisabled={false} isCombineEnabled={false}>
            {(provided) => (
              <div
                className="kanban-column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{columnId}</h2>
                {tasks[columnId].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="kanban-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;