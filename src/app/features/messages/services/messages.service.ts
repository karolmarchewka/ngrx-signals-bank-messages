import { Injectable } from '@angular/core';
import {delay, of, tap} from "rxjs";
import { bankMessages } from '../../../shared/model/mock-data';
import {BankMessage, SortingOption} from '../../../shared/model/types';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private tmpMessages: BankMessage[] = [];

  getMessages() {
    return of(bankMessages).pipe(
      delay(1000),
      tap(messages => this.setTemporaryMessages(messages)),
    );
  }

  filterMessages(filterQuery: string, sorting: string): BankMessage[] {
    if (filterQuery.trim() === '' && this.tmpMessages.length > 0) {
      return this.sortMessages(this.tmpMessages, sorting);
    }

    const filteredMessages = this.tmpMessages.filter(m => m.title.toLowerCase().includes(filterQuery.toLowerCase()));

    return this.sortMessages(filteredMessages, sorting);
  }

  sortMessages(bankMessages: BankMessage[], sorting: string): BankMessage[] {
    return bankMessages.sort((a, b) => {
      if (sorting === SortingOption.Read) {
        return a.isRead === b.isRead ? 0 : a.isRead ? 1 : -1;
      } else {
        return a.isRead === b.isRead ? 0 : a.isRead ? -1 : 1;
      }
    });
  }

  markAsRead(messageId: number, filterQuery: string, sorting: string): BankMessage[] {
    const newMessages =  this.tmpMessages.map(m => m.id === messageId ? {...m, isRead: true} : m);
    this.setTemporaryMessages(newMessages);
    const filteredMessages = this.filterMessages(filterQuery, sorting);

    return filteredMessages;
  }

  deleteMessage(messageId: number, filterQuery: string, sorting: string): BankMessage[] {
    const newMessages =  this.tmpMessages.filter(m => m.id !== messageId);
    this.setTemporaryMessages(newMessages);
    const filteredMessages = this.filterMessages(filterQuery, sorting)

    return filteredMessages;
  }

  private setTemporaryMessages(messages: BankMessage[]) {
      this.tmpMessages = messages;
  }
}
