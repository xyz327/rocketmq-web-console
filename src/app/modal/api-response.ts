export interface ApiResponse<T> {
  status?:number
  data?:T
  errMsg?: string
}
