import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BillsListComponent } from './bills-list/bills-list.component';
import { MaterialDesignModule } from '../shared/modules/material-design/material-design.module';
import { CommonModule } from '@angular/common';
import { RegisterBillComponent } from './register-bill/register-bill.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    BillsListComponent,
    RegisterBillComponent,
    SimpleListComponent,
    SimpleFormComponent
  ],
  declarations: [
    BillsListComponent,
    RegisterBillComponent,
    SimpleListComponent,
    SimpleFormComponent
  ],
  entryComponents: [RegisterBillComponent]
})
export class ComponentsModule { }
