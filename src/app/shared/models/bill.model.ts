export class Bill {
    description: string;
    paid: number;
    lent: number;
    owes: number;
    nParticipants: number;
    purchaseId: number;
    isOwner: boolean;
    ownerName: string;
    ownerId: number;

    deserialize(input: any) {
        this.description = input.description;
        this.paid = input.paid;
        this.lent = input.lent;
        this.owes = input.owes;
        this.nParticipants = input.nparticipants;
        this.purchaseId = input.purchase_id;
        this.isOwner = input.is_owner;
        this.ownerName = input.owner_name;
        this.ownerId = input.owner_id;

        return this;
    }
}
