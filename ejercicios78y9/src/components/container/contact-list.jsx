import React, { useState, useEffect } from 'react';
import { Contact } from '../../modules/contact.class'
import { CONTACTTYPE } from '../../modules/contacttype.enum';
import ContactComponent from '../pure/contact';
import AddContactForm from '../pure/form/addContactForm';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Ana Maria', 'Tamayo', 'anatama@gmail.com', 3127485648, true, CONTACTTYPE.FAMILY );
    const defaultContact2 = new Contact('Juan Andrés', 'Tobón ', 'jatp@gmail.com', 315264124, true, CONTACTTYPE.FRIEND );
    const defaultContact3 = new Contact('Olga Lucía', 'Ramírez', 'olguita@hotmail.com', 3124786952, false, CONTACTTYPE.WORK );



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
                                    <th style={ { padding: '0 20px'} }>Contact Name</th>
                                    <th style={ { padding: '0 20px'} }>Email</th>
                                    <th style={ { padding: '0 20px'} }>Last Name</th>
                                    <th style={ { padding: '0 20px'} }>Phone</th>
                                    <th style={ { padding: '0 20px'} }>Connected</th>
                                    <th style={ { padding: '0 20px'} }>Whos</th>  
                                    <th style={ { padding: '0 20px'} }>Remove</th>  
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
