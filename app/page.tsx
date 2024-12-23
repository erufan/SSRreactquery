import DataTable from "@/components/DataTable";
import getData from "@/server/actions/getData";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: async () =>
      await getData("https://jsonplaceholder.typicode.com", "/todos"),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DataTable />
      </HydrationBoundary>
    </>
  );
}
