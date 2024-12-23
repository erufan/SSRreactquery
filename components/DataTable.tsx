"use client";
import { useQuery } from "@tanstack/react-query";
import Table from "./ui/Table";
import getData from "@/server/actions/getData";

const DataTable = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      await getData("https://jsonplaceholder.typicode.com", "/todos"),
  });

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
          {todos?.data.map((todo) => (
            <Table.TableRow key={todo.title}>
              <Table.TableCell>{todo.title}</Table.TableCell>
            </Table.TableRow>
          ))}
        </Table.TableBody>
      </Table>
    </>
  );
};

export default DataTable;
