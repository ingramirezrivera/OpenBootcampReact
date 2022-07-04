import React, { useState, useEffect } from 'react';
import { Contact } from '../../modules/contact.class'
import { CONTACTTYPE } from '../../modules/contacttype.enum';
import ContactComponent from '../pure/contact';
import AddContactForm from '../pure/form/addContactForm';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('ExampleName1', 'Example LastName1', 'example@gmail.com', 123456789, true, CONTACTTYPE.FAMILY );
    const defaultContact2 = new Contact('ExampleName2', 'Example LastName2', 'example2@gmail.com', 987123654, true, CONTACTTYPE.FRIEND );
    const defaultContact3 = new Contact('ExampleName3', 'Example LastName3', 'example3@gmail.com', 987654321, false, CONTACTTYPE.WORK );



    const [contacts, setContacts] = useState([defaultContact1,defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('Tasklist component is going to unmount')
        };
    }, [contacts]);

    function addContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function connectedContact(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts]
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    function removeContact(contact){
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    }


    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        Your Contacts:
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th>Contact Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Connected</th>
                                    <th>Whos</th>  
                                    <th>Remove</th>  
                                </tr>
                            </thead>
                            <tbody>
                            
                                {contacts.map((contact, index) => {
                                return (
                                    <ContactComponent
                                        key={index}
                                        contact={contact}
                                        remove={removeContact}
                                        connection={connectedContact}
                                        >
                                        
                                    </ContactComponent>
                                )
                                })}
                            
                            </tbody>
                        </table>

                    </div>

                </div>
                <div className='card'>
                    <div className='card-header p-3'>
                        Add a contact:
                    </div>
                    <div className='card-body' >
                        <AddContactForm
                            add={addContact}>

                        </AddContactForm>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ContactListComponent;
