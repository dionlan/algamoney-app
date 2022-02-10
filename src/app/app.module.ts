import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext'
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LancamentoService } from './services/lancamentoService';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';

import { TransactionsReadComponent } from './transactions-read/transactions-read.component';
import { NavComponent } from './template/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavComponent,
    TransactionsReadComponent
   
  ],

  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ScrollingModule,
    HttpClientModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    InputNumberModule,
    ToolbarModule,

    DropdownModule,
    RippleModule,
    BadgeModule,
    TooltipModule,
    CalendarModule,
    TabMenuModule,
    TieredMenuModule,
    MenubarModule,
    DividerModule,

    RouterModule.forRoot([
      {path:'',component: AppComponent},
    ])

  ],
  
  bootstrap: [AppComponent],
  providers: [MessageService, ConfirmationService, LancamentoService]
})
export class AppModule { }
