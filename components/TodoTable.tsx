"use client";
import Todo from "@/interface/Todo";
import Table from "./ui/Table";
import useGetData from "@/hooks/useGetData";
import TodoCell from "./TodoCell";

const TodoTable = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useGetData<Todo[]>(
    "https://jsonplaceholder.typicode.com",
    "/todos",
    "todos"
  );

  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Table>
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableHead>user</Table.TableHead>
            <Table.TableHead>title</Table.TableHead>
            <Table.TableHead>completed</Table.TableHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {todos!.map((todo) => (
            <TodoCell todo={todo} key={todo.id} />
          ))}
        </Table.TableBody>
      </Table>
    </>
  );
};

export default TodoTable;
