import {ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {MenuItem} from "primeng/api";
import { MessagesStore } from '../../messages/store/messages-store';

@Component({
  selector: 'bm-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {
  menuItems: MenuItem[] = [{label: 'Bank Messages'}];

  constructor(public store: MessagesStore) {
  }
}
