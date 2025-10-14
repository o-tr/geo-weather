import { jmaMap } from "@/utils/getJMAfromWMO/map";

export const getJMAfromWMO = (wmo: number) => {
  return jmaMap[wmo] ?? "100";
};
