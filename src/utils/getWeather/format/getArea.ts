export const getArea = <T extends {area:{code:string,name:string}}>(data: T[], geoPosId: string): T => {
  for (const d of data) {
    if (d.area.code === geoPosId) {
      return d;
    }
  }
  return data[0];
}
