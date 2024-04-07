import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {BankMessage} from '../../../../shared/model/types';
import { MessagesStore } from '../../store/messages-store';

@Component({
  selector: 'bm-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  message = input.required<BankMessage>();

  constructor(private store: MessagesStore) {
  }

  public onMarkAsRead(id: number) {
    this.store.markAsRead(id);
  }

  public onDelete(id: number) {
    this.store.deleteMessage(id);
  }
}
