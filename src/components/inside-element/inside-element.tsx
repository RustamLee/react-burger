import React, { useRef } from "react";
import styles from './inside-element.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { moveIngredient } from "../../services/actions/constructor";
import { useDispatch } from 'react-redux';
import { useDrag, useDrop, DropTargetMonitor, XYCoord } from "react-dnd";
import { TItem } from "../../utils/types";


type TInsideElement = {
  item: TItem
  deleteElement: (item: TItem) => void
  index: number
  id: string | undefined
}

export function InsideElement({ item, deleteElement, index, id }: TInsideElement) {

  const dispatch = useDispatch();
  const moveCard = (dragIndex: number, hoverIndex: number) => { dispatch(moveIngredient(dragIndex, hoverIndex)) }
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'InsideItem',
    collect(monitor: DropTargetMonitor<TInsideElement, TInsideElement>) {
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
      const hoverBoundingRect: DOMRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset: XYCoord | null = monitor.getClientOffset()
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top
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
  const options = {
    id: item.id
  }

  return (
    <div ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => deleteElement(item)}
        {...options}
      />
    </div>
  )
} 
