import React, { useRef } from "react";
import styles from './inside-element.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { moveIngredient } from "../../services/actions/constructor";
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import { burgerIngredientType } from '../../utils/types';

InsideElement.propTypes = {
  item: burgerIngredientType.isRequired,
  deleteElement: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

export function InsideElement({ item, deleteElement, index, id }) {

  const dispatch = useDispatch();
  const moveCard = (dragIndex, hoverIndex) => { dispatch(moveIngredient(dragIndex, hoverIndex)) }
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: 'InsideItem',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'InsideItem',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <div ref={ref}>
      <DragIcon type="primary" className={styles.drag} />
      <ConstructorElement
        id={item.id}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => deleteElement(item)}
      />
    </div>
  )
} 
