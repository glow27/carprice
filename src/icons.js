import React, { useEffect, useState } from 'react';
import Pages from './pages';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { setImages } from './redux/actionCreators';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Picture({ picture, index }) {
  return (
    <Draggable draggableId={picture.id} index={index}>
      {(provided) => (
        <img
          alt="app"
          src={picture.src}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        ></img>
      )}
    </Draggable>
  );
}

const PictureList = React.memo(function PictureList({ pictures }) {
  return pictures.map((picture, index) => (
    <Picture picture={picture} index={index} key={picture.id} />
  ));
});

export default function Icons() {
  const images = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const [apps, setApps] = useState(images[currentPage]);

  const paginate = (num) => setCurrentPage(num);

  useEffect(() => {
    setApps(images[currentPage]);
  }, [currentPage, images]);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const pictures = reorder(
      apps,
      result.source.index,
      result.destination.index
    );

    dispatch(setImages(pictures, currentPage));
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="top"
            >
              <PictureList pictures={apps} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Pages
        totalIcons={images.reduce((a, b) => {
          return a + b.length;
        }, 0)}
        paginate={paginate}
      />
    </>
  );
}
