"use client";
import Todo from "@/interface/Todo";
import Table from "./ui/Table";
import useGetData from "@/hooks/useGetData";

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
            <Table.TableHead>title</Table.TableHead>
            <Table.TableHead>completed</Table.TableHead>
            <Table.TableHead>
              <span className="sr-only">Actions</span>
            </Table.TableHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {todos!.map((todo) => (
            <Table.TableRow key={todo.title}>
              <Table.TableCell>{todo.title}</Table.TableCell>
            </Table.TableRow>
          ))}
        </Table.TableBody>
      </Table>
    </>
  );
};

export default TodoTable;
