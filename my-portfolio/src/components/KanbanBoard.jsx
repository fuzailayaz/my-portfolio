import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = {
  todo: [
    { id: "1", content: "Learn React" },
    { id: "2", content: "Learn JavaScript" },
  ],
  inProgress: [{ id: "3", content: "Build a project" }],
  done: [{ id: "4", content: "Deploy the app" }],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    setTasks((prevTasks) => {
      const updatedTasks = structuredClone(prevTasks);
      const [movedTask] = updatedTasks[source.droppableId].splice(source.index, 1);
      updatedTasks[destination.droppableId].splice(destination.index, 0, movedTask);
      return updatedTasks;
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-900 text-white p-6">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {Object.keys(tasks).map((columnId) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-gray-800 p-4 rounded-lg shadow-lg min-h-[300px] w-full 
                  ${snapshot.isDraggingOver ? "bg-gray-700" : ""}`}
                >
                  <h2 className="text-lg font-semibold text-center capitalize mb-4">
                    {columnId}
                  </h2>
                  {tasks[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`bg-blue-600 p-3 rounded-md shadow-md mb-2 text-center cursor-pointer transition-transform 
                          ${snapshot.isDragging ? "scale-105 bg-blue-500" : ""}`}
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
    </div>
  );
};

export default KanbanBoard;