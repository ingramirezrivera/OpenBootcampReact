import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../modules/contact.class'
import { CONTACTTYPE } from '../../modules/contacttype.enum';
import contact from '../../styles/contact.scss';


function ContactComponent( { contact }) {

    function contactTypeBadge(){
        switch(contact.contactType){
            case CONTACTTYPE.FAMILY:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { contact.contactType }
                        </span>
                    </h6>)
            case CONTACTTYPE.FRIEND:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { contact.contactType }
                        </span>
                    </h6>)
            case CONTACTTYPE.WORK:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { contact.contactType }
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    return (
        
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{contact.name}</span>
            </td>
            <td className='align- middle'>
                <span>{contact.lastName}</span>
            </td>
            <td className='align- middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align- middle'>
                <span>{contact.phone}</span>
            </td>
            <td className='align- middle'>
                <span>{contact.connected ? (<i className="bi bi-check-circle-fill " style={ {color:'green'} }></i>) : (<i className="bi bi-x-circle-fill" style={ {color: 'tomato'} }></i>)}</span>
            </td>
            <td>
                <span>{contactTypeBadge()}</span>
            </td>
            <td  className='align- middle'>
                <i className="bi bi-trash task-action" style={ {color: 'tomato', fontSize: '20px'} }></i>
                
            </td>
        </tr>
        
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired

}

export default ContactComponent

