import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import './Sortable.css';

export type Props = {
    id: string;
    value: string;
}

export const Sortable = (props: Props) => {
  const sortable = useSortable({id: props.id});
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
      className="sortable"
    >
        {props.value}
    </div>
  );
};
