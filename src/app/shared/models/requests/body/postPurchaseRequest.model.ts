import { Purchase } from '../../purchase.model';

export class PostPurchaseRequest {
    roomId: number;
    purchase: Purchase;
    usersId: number[];

    constructor(request: any) {
        this.roomId = request.roomId;
        this.purchase = new Purchase().deserialize(request.purchase);
        this.usersId  = request.usersId;

        return this;
    }
}
