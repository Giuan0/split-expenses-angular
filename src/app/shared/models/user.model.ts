class Room {
    id: number;
    name: string;

    deserialize(room: any) {
        this.id = room.id;
        this.name = room.name;

        return this;
    }
}

export class User {
    id: number;
    name: string;
    email: string;
    rooms: Room[];

    deserialize(user: any) {
        this.id = user.id;
        this.name = user.name;
        if (user.email) {
            this.email = user.email;
        }
        if (user.rooms) {
            this.rooms = user.rooms.map(r => new Room().deserialize(r));
        }

        return this;
    }

}
