import {IStoreList} from "../app/Interfaces/IStoreList";
import {BehaviorSubject} from "rxjs";

export class ListStore<T extends {id: number}> implements IStoreList<T>{
  protected readonly list = new BehaviorSubject<T[]>([]);
  protected readonly list$ = this.list.asObservable();

  getList(){
    return this.list$;
  }

  fillList(invites: T[]){
    this.list.next(invites);
  }

  addToStoreList(item: T): void {
    this.list.next([...this.list.value, item]);
  }

  dropFromStoreList(id: number){
    this.list.next([...this.list.value.filter(v => v.id !== id)]);
  }
}
