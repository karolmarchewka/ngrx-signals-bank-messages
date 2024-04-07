import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {CardModule} from 'primeng/card';
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MessagesComponent} from './messages/messages.component';
import {MessageComponent} from './messages/message/message.component';
import {MessagesStore} from './store/messages-store';

@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent
  ],
  providers: [
    MessagesStore,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
  exports: [
    MessagesComponent,
  ],
})
export class MessagesModule {
}
