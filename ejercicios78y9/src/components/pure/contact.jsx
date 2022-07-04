import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../modules/contact.class'
import { CONTACTTYPE } from '../../modules/contacttype.enum';
import contact from '../../styles/contact.scss';


function ContactComponent( { contact, connection , remove }) {

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

    function contactConnectedIcon(){
        if(contact.connected){
            return (<i onClick={() => connection(contact)} className="bi bi-check-circle-fill task-action" style={ {color:'green'} }></i>);
        }else {
            return (<i onClick={() => connection(contact)} className="bi bi-x-circle-fill task-action" style={ {color: 'tomato'} }></i>)
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
                <span>{contactConnectedIcon()}</span>
            </td>
            <td>
                <span>{contactTypeBadge()}</span>
            </td>
            <td  className='align- middle'>
                <i onClick={() => remove(contact)} className="bi bi-trash task-action" style={ {color: 'tomato', fontSize: '20px'} }></i>
                
            </td>
        </tr>
        
    )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connection: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired


}

export default ContactComponent

