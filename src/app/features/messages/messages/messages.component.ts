import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DropdownChangeEvent} from "primeng/dropdown";
import {Sorting} from '../../../shared/model/types';
import {MessagesStore} from '../store/messages-store';

@Component({
  selector: 'bm-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent implements OnInit {
  sortingOptions: Sorting[] = [
    {value: 'Read'},
    {value: 'Unread'},
  ];

  constructor(public store: MessagesStore) {
  }

  ngOnInit(): void {
    this.store.loadMessages();
  }

  public onSortingChange(event: DropdownChangeEvent) {
    this.store.changeSorting(event.value as Sorting);
  }

  public onFilterQueryChanged(query: string) {
    this.store.filterMessages(query);
  }
}
