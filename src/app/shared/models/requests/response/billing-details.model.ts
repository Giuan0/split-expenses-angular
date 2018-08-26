import { Bill } from '../../bill.model';
import { User } from '../../user.model';

export class BillingDetails {
    participants: User[];
    bills: Bill[];

    constructor(input: any) {
        this.participants = input.participants.map(u => new User().deserialize({name: u}));
        this.bills = input.bills.map(b => new Bill().deserialize(b) );
    }
}
