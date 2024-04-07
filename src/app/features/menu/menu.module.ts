import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MenuModule { }
