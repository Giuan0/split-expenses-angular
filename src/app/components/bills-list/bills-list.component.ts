import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterBillComponent } from '../register-bill/register-bill.component';
import { BillingDetails } from '../../shared/models/requests/response/billing-details.model';
import { RoomsService } from '../../core/http/rooms/rooms.service';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss']
})

export class BillsListComponent implements OnInit {
  @Input() room: {
    id: number,
    name: string
  };

  joiningUser = false;

  @Input() data: BillingDetails;

  constructor(public dialog: MatDialog, private roomsService: RoomsService) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterBillComponent, {
      width: '500px',
      data: { roomId: this.room.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  enrollUser(email, rooId=this.room.id) {
    this.roomsService.enrollUser(email, rooId)
    .subscribe(res => {
      console.log(res);
    });
  }

}
