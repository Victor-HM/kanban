import { Draggable } from "react-beautiful-dnd";
import { Card } from "./Card";
import { ListProps } from "./Board";

export function List({ nameColumn, list }: ListProps) {
  return (
    <>
      <header className="py-6">
        <strong className="text-[#403937] text-xl font-bold">
          {nameColumn}
        </strong>
      </header>

      <ul className="w-full flex flex-col gap-6">
        {list.map(({ id, title, tag, description }, index) => (
          <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
              <li
                className=" bg-white flex flex-col justify-between gap-3 p-6 shadow-lg rounded-lg cursor-grab"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Card description={description} tag={tag} title={title} />
              </li>
            )}
          </Draggable>
        ))}
      </ul>
    </>
  );
}
