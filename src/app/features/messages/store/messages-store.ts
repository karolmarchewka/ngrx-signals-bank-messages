import {computed, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tapResponse} from "@ngrx/operators";
import {patchState, signalStore, withState} from "@ngrx/signals";
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {exhaustMap, pipe, tap} from "rxjs";
import {BankMessage, Sorting} from '../../../shared/model/types';
import {MessagesService} from '../services/messages.service';

interface MessageState {
  messages: BankMessage[];
  sorting: Sorting;
  filterQuery: string;
  showSpinner: boolean;
}

export const initialState: MessageState = {
  messages: [],
  sorting: {value: 'Read'},
  filterQuery: '',
  showSpinner: false
};

@Injectable({
  providedIn: 'root'
})
export class MessagesStore extends signalStore(withState(initialState)) {

  unreadMessages = computed(() => this.messages().filter(m => !m.isRead).length);

  constructor(private messagesService: MessagesService) {
    super();
  }

  loadMessages = rxMethod<void>(
    pipe(
      takeUntilDestroyed(),
      tap(() => patchState(this, {showSpinner: true})),
      exhaustMap(() => {
        return this.messagesService.getMessages().pipe(
          tapResponse({
            next: (messages) => {
              const sortedMessages = this.messagesService.sortMessages(messages, this.sorting().value)
              patchState(this, {messages: sortedMessages, showSpinner: false})
            },
            error: (error) => {
              console.log(error);
              patchState(this, {showSpinner: false})
            }
          }),
        )
      })
    )
  );

  markAsRead(messageId: number) {
    const updatedMessages = this.messagesService.markAsRead(messageId, this.filterQuery(), this.sorting().value);
    patchState(this, {messages: updatedMessages});
  }

  deleteMessage(messageId: number) {
    const updatedMessages = this.messagesService.deleteMessage(messageId, this.filterQuery(), this.sorting().value);
    patchState(this, {messages: updatedMessages});
  }

  changeSorting(sorting: Sorting) {
    patchState(this, {sorting, showSpinner: true});
    const sortedMessages = this.messagesService.sortMessages(this.messages(), this.sorting().value);
    patchState(this, {messages: sortedMessages, showSpinner: false});
  }

  filterMessages(filterQuery: string) {
    patchState(this, {filterQuery});
    const filteredMessages = this.messagesService.filterMessages(filterQuery, this.sorting().value);
    patchState(this, {messages: filteredMessages});
  }
}
