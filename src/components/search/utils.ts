import { RefinementListProvided } from "react-instantsearch-core";

export const compareRefinementItems = (items1: RefinementListProvided['items'], items2: RefinementListProvided['items']) => {
  return items1.map((x) => x.label).join() === items2.map((x) => x.label).join(); 
}