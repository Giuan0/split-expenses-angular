import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsService } from './http/bills/bills.service';
import { RoomsService } from './http/rooms/rooms.service';
import { UsersService } from './http/users/users.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [BillsService, RoomsService, UsersService]
})
export class CoreModule { }
