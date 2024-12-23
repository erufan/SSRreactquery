import getData from "@/server/actions/getData";
import { useQuery } from "@tanstack/react-query";

const useGetData = <T>(
  BaseUrl: string,
  endpoint: string,
  key: string,
  init?: Omit<RequestInit, "method">
) => {
  const queryClient = useQuery<T>({
    queryKey: [key],
    queryFn: async () => await getData(BaseUrl, endpoint, init),
  });

  return queryClient;
};

export default useGetData;
