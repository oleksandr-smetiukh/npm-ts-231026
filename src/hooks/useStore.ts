import { useQuery } from "react-query";
import { CONFIGURATION_QUERY } from "../utils/constants";
import { getConfiguration } from "../helpers/configurationRequest";
import { Store } from "../types/Store";
import { getEmptyStore } from "../utils/response";

const useStore = (): Store => {
  const query = useQuery({
    queryKey: CONFIGURATION_QUERY,
    queryFn: getConfiguration,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const response = query.data || getEmptyStore();

  return response;
};

export default useStore;
