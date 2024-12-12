import { useMemo } from "react";
import { useLocation } from "react-router";

export const useQuery = () => {
  const { search } = useLocation();

  const querySearch = useMemo(() => new URLSearchParams(search), [search]);

  let queryParams: any = {};

  querySearch.forEach((value, key) => {
    queryParams[key] = value;
  });

  return queryParams;
};
