import TodoTable from "@/components/TodoTable";
import getData from "@/server/actions/getData";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: async () =>
      await getData("https://jsonplaceholder.typicode.com", `/todos?_limit=8`),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="px-5 mt-10 bg-[#ffff]">
          <TodoTable />
        </div>
      </HydrationBoundary>
    </>
  );
}
