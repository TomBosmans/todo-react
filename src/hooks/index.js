import {  useLocation } from "react-router-dom";

export const useQuery = (query) => (
  new URLSearchParams(useLocation().search).get(query)
);
