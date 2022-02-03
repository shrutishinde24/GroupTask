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
  ],
  providers: [NetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
