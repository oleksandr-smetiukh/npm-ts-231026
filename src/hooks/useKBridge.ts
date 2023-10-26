import { useQuery } from "react-query";
import { KBRIDGE_QUERY } from "../utils/constants";
import { initialiseKBridge } from "../helpers/kBridgeRequest";
import { getEmptyKBStore } from "../utils/kbridge";

const useKBridge = (): any => {
  const query = useQuery({
    queryKey: KBRIDGE_QUERY,
    queryFn: initialiseKBridge,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const response = query.data || getEmptyKBStore();

  return response;
};

export default useKBridge;
