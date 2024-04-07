import { BankMessage } from "./types";

export const bankMessages: BankMessage[] = [];

for (let i = 0; i <= 20; i++) {
  bankMessages.push({
    id: i,
    title: `Bank Message ${i}`,
    isRead: i%2 === 0,  // If 'i' is even, isRead will be true. If not, isRead will be false.
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nunc nec arcu lacinia congue. Nullam nec nunc nec arcu lacinia congue. Nullam nec nunc nec arcu lacinia congue. Nullam nec nunc nec arcu lacinia congue. Nullam nec nunc nec arcu lacinia congue.`
  });
}
