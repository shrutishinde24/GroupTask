import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { BillingInstructComponent } from './MyComponents/billing_ins/billing-instruct/billing-instruct.component';
import { ModificationcompComponent } from './MyComponents/billing_ins/modificationcomp/modificationcomp.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { EmailComponent } from './MyComponents/email/email.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AddEdiCompoComponent } from './MyComponents/Homemodel/add-edi-compo/add-edi-compo.component';
import { ShowCompoComponent } from './MyComponents/Homemodel/show-compo/show-compo.component';
import { ShowDetailsComponent } from './MyComponents/show-details/show-details.component';
import { ViewcompComponent } from './MyComponents/billing_ins/viewcomp/viewcomp.component';
import { EditcompComponent } from './MyComponents/billing_ins/editcomp/editcomp.component';
import { DragDropCompComponent } from './MyComponents/billing_ins/drag-drop-comp/drag-drop-comp.component';
import { ComponentComponent } from './MyComponents/Distribution_Queue/component/component.component';

const routes: Routes = [
  {path:"",redirectTo: 'Home', pathMatch: 'full'},
  {path:"Home",component:HomeComponent},
  {path:"billing-instruction",component:BillingInstructComponent},
  {path:"billing-instruction/:billingId/view/:itemId/item",component: ViewcompComponent,data:{animation:'isRight'}},
  {path:"billing-instruction/:billingId/edit/:itemId/item",component:EditcompComponent,data:{animation:'isRight'}},
  {path:"Lobcat",component:ShowCompoComponent},
  {path:"Lobcat/:LobcatId/view",component:ShowDetailsComponent,data: { animation: 'isRight' }},
  {path:"Lobcat/create",component:AddEdiCompoComponent,data: { animation: 'isLeft' }},
  {path:"Lobcat/:LobcatId/edit",component:EditComponent,data: { animation: 'isRight' }},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"email-template",component:EmailComponent,data: { animation: 'isRight' }},
  {path:"billing-instructions",component:ModificationcompComponent},
  {path:"dual-list",component:DragDropCompComponent},
  {path:"libraries",component:ComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
