import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CONTACTTYPE } from '../../../modules/contacttype.enum'
import { Contact } from '../../../modules/contact.class';
import contactForm from '../../../styles/contactForm.scss';

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
        <form id='contact-form'onSubmit={addContact} className='d-flex flex-column justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input placeholder='Name' ref={nameRef} id='inputName' type='text' className='form-control form-control-lg m-3' required autoFocus />
                <input placeholder='Last Name' ref={lastNameRef} id='inputLastName' type='text' className='form-control form-control-lg m-3' required/>
                <input placeholder='Email' ref={emailRef} className='form-control form-control-lg m-3' />
                <input placeholder='Phone' ref={phoneRef} className='form-control form-control-lg m-3' />
                <label htmlFor='selectLevel' className='sr-only'>Category:</label>
                <select ref={contactTypeRef} defaultValue={CONTACTTYPE.FRIEND} id='selecLevel' className='form-control form-control-lg m-3'>
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
            <button id='button-form' type='submit' className='btn btn-primary'>Add Contact</button>

        </form>
    )   
}

AddContactForm.propTypes = {

}

export default AddContactForm


