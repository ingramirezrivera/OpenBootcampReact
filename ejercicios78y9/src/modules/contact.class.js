import { CONTACTTYPE } from "./contacttype.enum";

export class Contact {
    name = "Daniel";
    lastName = "";
    email = "";
    phone = 0;
    connected = false;
    contactType = CONTACTTYPE.FAMILY

    constructor( name, lastName ,email, phone , connected , contactType  ){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.connected = connected;
        this.contactType = contactType;
    }
}

