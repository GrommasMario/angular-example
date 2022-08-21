import {Observable} from "rxjs";

export interface IStoreList<T> {
  fillList(list: T[]): void;
  addToStoreList(item: T): void;
  getList(): Observable<T[]>
}
