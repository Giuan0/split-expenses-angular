import { Component } from '@angular/core';
import { Bill } from './shared/models/bill.model';
import { BillsService } from './core/http/bills/bills.service';
import { RegisterBillComponent } from './components/register-bill/register-bill.component';

import { MatDialog } from '@angular/material';
import { BillingDetails } from './shared/models/requests/response/billing-details.model';
import { User } from './shared/models/user.model';
import { UsersService } from './core/http/users/users.service';
import { RoomsService } from './core/http/rooms/rooms.service';

interface Room {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  userId = 2;

  registeringRoom = false;

  rooms: string[] = ['Casa02 (Patos)', 'Casa03 (CG)'];
  user: User;

  room: Room;

  data: BillingDetails;
  title = 'splitProject';

  constructor(private billsService: BillsService,
    private usersService: UsersService,
    private roomsService: RoomsService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.usersService.getUser(this.userId)
    .subscribe((res: User) => {
      this.user = res;
      console.log(res);
    });
  }

  selectRoom(room): void {
    this.billsService.getBills(room.id, this.userId)
    .subscribe((res: BillingDetails) => {
        // console.log(res);
        this.data = res;
        this.room = room;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterBillComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  registeringRoomEvent(roomName): void {
    console.log(roomName);
    this.roomsService.postRoom(this.userId, roomName)
    .subscribe(res => {
      console.log(res);
      this.registeringRoom = false;
      this.ngOnInit();
    });
    // this.registeringRoom = true;
  }

}
