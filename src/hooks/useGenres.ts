import { useQuery } from "@chakra-ui/react";
import apiClient from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("genres"),
  });

export default useGenres;
