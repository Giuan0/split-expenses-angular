import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoomsService } from '../../core/http/rooms/rooms.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { BillsService } from '../../core/http/bills/bills.service';
import { PostPurchaseRequest } from '../../shared/models/requests/body/postPurchaseRequest.model';

@Component({
  selector: 'app-register-bill',
  templateUrl: './register-bill.component.html',
  styleUrls: ['./register-bill.component.css']
})
export class RegisterBillComponent implements OnInit {

  loading = false;
  registerForm: FormGroup;

  users: User[] = [];
  // rooms = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterBillComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public roomsService: RoomsService,
    public billsService: BillsService ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      roomId: [this.data.roomId],
      ownerId: ['', Validators.required],
      purchase: this.fb.group({
        description: ['', Validators.required],
        local: [''],
        total: [0, Validators.required]
      }),
      usersId: [[], Validators.required]
    });

    this.roomsService.getUserNamesByRoom(this.data.roomId)
    .subscribe((userNames: User[]) => {
      // this.registerForm.patchValue({usersId: userNames.map(u => u.id)});

      this.users = userNames;
    });
  }

  submit(request, ownerId: number = this.registerForm.value.ownerId): void {
    this.loading = true;
    request = new PostPurchaseRequest(request);
    this.billsService.postPurchase(ownerId, request)
    .subscribe(res => {
      console.log(res);
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
