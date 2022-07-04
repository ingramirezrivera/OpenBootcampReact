import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CONTACTTYPE } from '../../../modules/contacttype.enum'
import { Contact } from '../../../modules/contact.class';

function AddContactForm( { add }) {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const contactTypeRef = useRef(CONTACTTYPE.FAMILY);

    function addContact(e){
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            phoneRef.current.value,
            false,
            contactTypeRef.current.value
        );
        add(newContact);

    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input placeholder='Name' ref={nameRef}/>
                <input placeholder='Last Name' ref={lastNameRef} />
                <input placeholder='Email' ref={emailRef}/>
                <input placeholder='Phone' ref={phoneRef}/>
                <label htmlFor='selectLevel' className='sr-only'>Whos</label>
                <select ref={contactTypeRef} defaultValue={CONTACTTYPE.FRIEND} id='selecLevel'>
                    <option value={CONTACTTYPE.FAMILY}>
                        Family
                    </option>
                    <option value={CONTACTTYPE.FRIEND}>
                        Friend
                    </option>
                    <option value={CONTACTTYPE.WORK}>
                        Work
                    </option>
                </select>
            </div>
            <button type='submit' className='btn btn-primary'>Add Contact</button>

        </form>
    )   
}

AddContactForm.propTypes = {

}

export default AddContactForm


