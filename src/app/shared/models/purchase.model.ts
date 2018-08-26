export class Purchase {
    description: string;
    local: string;
    total: number;

    deserialize(purchase: any) {
        this.description = purchase.description;
        this.local = purchase.local;
        this.total = purchase.total;

        return this;
    }
}
