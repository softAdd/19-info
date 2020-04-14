/* API */
export type CovidInfo = {
  Country: string,
  Province: string,
  Lat: number,
  Lon: number,
  Date: string,
  Cases: number,
  Status: string,
}
/* D3 TYPES */
export type ChartItem = {
  cases: number,
  date: string,
}