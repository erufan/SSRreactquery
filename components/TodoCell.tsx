import Todo from "@/interface/Todo";
import React from "react";
import Table from "./ui/Table";

const TodoCell = ({ todo }: { todo: Todo }) => {
  return (
    <Table.TableRow>
      <Table.TableCell>{todo.userId}</Table.TableCell>
      <Table.TableCell className="font-medium">{todo.title}</Table.TableCell>
      <Table.TableCell>{todo.completed ? "✅" : "❌"}</Table.TableCell>
    </Table.TableRow>
  );
};

export default TodoCell;
