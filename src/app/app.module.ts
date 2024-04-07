import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './features/menu/menu.module';
import { MessagesModule } from './features/messages/messages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MessagesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
