export interface BankMessage {
  id: number;
  title: string;
  isRead: boolean;
  message: string;
}

export interface Sorting {
  value: string;
}

export enum SortingOption {
  Read = 'Read',
  Unread = 'Unread',
}
