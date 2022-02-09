import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

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
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {RippleModule} from 'primeng/ripple';
import {BadgeModule} from 'primeng/badge';
import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';



@NgModule({
  declarations: [
    AppComponent
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
    RouterModule,
    InputTextareaModule,
    InputNumberModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,

    DropdownModule,
    ProgressBarModule,
    RippleModule,
    BadgeModule,
    TooltipModule,
    CalendarModule

  ],
  
  bootstrap: [AppComponent],
  providers: [MessageService, ConfirmationService, LancamentoService]
})
export class AppModule { }
