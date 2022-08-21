import {Meeting} from "../../../../models/Meeting";
import {Injectable} from "@angular/core";
import {ListStore} from "../../../../../assets/ListStore";

@Injectable()
export class MeetingsStore extends ListStore<Meeting> {}

