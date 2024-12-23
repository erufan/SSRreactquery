import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <Table>
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </Table.TableHead>
            <Table.TableHead>title</Table.TableHead>
            <Table.TableHead>completed</Table.TableHead>
            <Table.TableHead>
              <span className="sr-only">Actions</span>
            </Table.TableHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {[].map((todo) => (
            <span key={todo}>todo</span>
          ))}
        </Table.TableBody>
      </Table>
    </>
  );
}
