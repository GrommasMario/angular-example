import { Injectable } from '@angular/core';
import { Meeting } from '../../../../models/Meeting';
import { ListStore } from '../../../../../assets/ListStore';

@Injectable()
export class MeetingsStore extends ListStore<Meeting> {}
