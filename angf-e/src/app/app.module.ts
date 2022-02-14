import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowCompoComponent } from './MyComponents/Homemodel/show-compo/show-compo.component';
import { AddEdiCompoComponent } from './MyComponents/Homemodel/add-edi-compo/add-edi-compo.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NetApiService } from './Services/net-api.service';
import { ShowDetailsComponent } from './MyComponents/show-details/show-details.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailComponent } from './MyComponents/email/email.component';
import { FileSelectDirective, FileUploadModule } from 'ng2-file-upload';
import { BillingInstructComponent } from './MyComponents/billing_ins/billing-instruct/billing-instruct.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FinalDataComponent } from './MyComponents/billing_ins/final-data/final-data.component';
import { ModificationcompComponent } from './MyComponents/billing_ins/modificationcomp/modificationcomp.component';
import { DragDropCompComponent } from './MyComponents/billing_ins/drag-drop-comp/drag-drop-comp.component';
import { ViewcompComponent } from './MyComponents/billing_ins/viewcomp/viewcomp.component';
import { EditcompComponent } from './MyComponents/billing_ins/editcomp/editcomp.component';
import { DropDownListModule, ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePipe } from '@angular/common';
import { ComponentComponent } from './MyComponents/Distribution_Queue/component/component.component';
import { CardbodyComponent } from './MyComponents/Distribution_Queue/cardbody/cardbody.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataComponent } from './MyComponents/Distribution_Queue/data/data.component';
import { MatSort } from '@angular/material/sort';




@NgModule({
  
  declarations: [
    AppComponent,    
    ShowCompoComponent,
    AddEdiCompoComponent,
    AboutComponent,
    ShowDetailsComponent,
    EditComponent,
    HomeComponent,
    EmailComponent,
    BillingInstructComponent,
    FinalDataComponent,
    ModificationcompComponent,
    DragDropCompComponent,
    ViewcompComponent,
    EditcompComponent,
    ComponentComponent,
    CardbodyComponent,
    DataComponent,
    

    
   
    
  ],
  imports: [
    BrowserModule,
    DragDropModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FileUploadModule,
    ListBoxModule,
    DropDownListModule,
        MatSortModule,
        MatTableModule,MatPaginatorModule
  ],
  providers: [NetApiService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
