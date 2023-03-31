"use client";

import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
  DropResult,
} from "react-beautiful-dnd";
import { List } from "./List";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface ListProps {
  id: string;
  nameColumn: string;
  list: {
    id: string;
    title: string;
    description: string;
    tag: string[];
  }[];
}

resetServerContext();

const listColumn = [
  {
    id: uuidv4(),
    nameColumn: "A fazer",
    list: [
      {
        id: uuidv4(),
        title: "#boraCodar um Kanban 🧑‍💻",
        description:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tag: ["rocketseat", "desafio"],
      },
      {
        id: uuidv4(),
        title: "Manter a ofensiva 🔥",
        description:
          "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
        tag: ["rocketseat"],
      },
      {
        id: uuidv4(),
        title: "Almoçar 🥗",
        description:
          "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
        tag: ["autocuidado"],
      },
    ],
  },
  {
    id: uuidv4(),
    nameColumn: "Fazendo",
    list: [
      {
        id: uuidv4(),
        title: "Conferir o novo desafio 🚀 ",
        description:
          "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
        tag: ["rocketseat", "desafio"],
      },
      {
        id: uuidv4(),
        title: "Ser incrível 😎",
        description:
          "Sempre me lembrar de manter minha autenticidade e espalhar amor",
        tag: ["autocuidado"],
      },
    ],
  },
  {
    id: uuidv4(),
    nameColumn: "Feito",
    list: [
      {
        id: uuidv4(),
        title: "#boraCodar uma página de login 🧑‍💻",
        description:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tag: ["rocketseat", "desafio"],
      },
      {
        id: uuidv4(),
        title: "#boraCodar uma página de clima 🧑‍💻",
        description:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tag: ["rocketseat", "desafio"],
      },
      {
        id: uuidv4(),
        title: "#boraCodar um conversor 🧑‍💻",
        description:
          "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
        tag: ["rocketseat", "desafio"],
      },
    ],
  },
];

export function Board() {
  const [list, setList] = useState<ListProps[]>(listColumn);

  function onDragEnd<ListProps>(
    result: DropResult,
    columns: typeof list,
    setColumns: Dispatch<SetStateAction<typeof list>>
  ) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
    } else {
      const indexColumn = columns.findIndex(
        (index) => index.id === source.droppableId
      );
      let column = columns[indexColumn];
      const copiedList = [...column.list];
      const [removed] = copiedList.splice(source.index, 1);
      copiedList.splice(destination.index, 0, removed);

      let newColumn = [...columns];

      newColumn[indexColumn] = {
        id: column.id,
        list: copiedList,
        nameColumn: column.nameColumn,
      };

      setList(newColumn);
    }
  }

  return (
    <div className="max-w-full px-10 h-full flex gap-12 overflow-x-auto">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, list, setList)}>
        {list.map(({ id, nameColumn, list }) => (
          <Droppable droppableId={id} type={nameColumn} key={id}>
            {(provided, snapshot) => (
              <div
                className="px-10 overflow-scroll"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <List nameColumn={nameColumn} list={list} id="" />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
