import React, { useState } from 'react';
import CustomHeader from './CustomHeader';
import { Button }from 'rsuite';
import {useHistory} from 'react-router-dom';
import CreateContact from './CreateContact';
import CustomLoader from './CustomLoader';
import {db} from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import deleteIcon from '../images/deleteIcon.png';
import editIcon from '../images/edit.png'; 
import {connect} from 'react-redux';
import {logOut} from '../store/actionCreators/authAction';
import styles from './Contacts.module.css';

function Contacts({logOut}) {
    const [showContactForm, setShowContactForm] = useState(false);
    const [message, setMessage] = useState('');

    const history = useHistory();

    const handleSHowContact = () => {
        setShowContactForm(true)
    }


    const handleLogOut = () => {
        logOut()
        history.push('/')
    }

    const [
        contacts,
        loading,
        error,
      ] = useCollectionData(
        db.orderBy('firstName'),
        { idField: 'documentId' },
      );

      
    //   const deletedoc = (docId) => {
    //         db.doc(docId).delete().then(() => {
    //             console.log("Document successfully deleted!");
    //         }).catch((error) => {
    //             console.error("Error removing document: ", error);
    //         });
    //   }
     /* <button onClick={deletedoc(contact.documentId)}>DELETE</button> */


    if(loading) return <CustomLoader />    
    if(error){
        setMessage('Error getting contacts');
        setTimeout(() => setMessage(''), 3000) 
    } 
        

    return (
        <div>
            <CustomHeader handleClick={handleLogOut} text="Logout"/>
            <CreateContact
                showContactForm={showContactForm}
                setShowContactForm={setShowContactForm}
            />
            <p className='text-red-600 text-sm text-center'>{message}</p> 
            
            <div className='bg-background-color min-h-minH mt-1 flex p-6 md:p-12 md:flex-row flex-col'>
                <div className='md:w-1/5 md:mr-6 mb-6'>
                    <Button className='bg-primary-color w-full rounded p-3.5 text-sm text-white font-bold mb-2' type='submit' onClick={() => handleSHowContact()}>
                    + Create contact
                    </Button>
                    <Button className='bg-hover-green w-full rounded p-3.5 text-sm text-primary-color font-bold' type='submit'>
                    Contacts
                    </Button>
                </div>
                <div className='border border-border-color rounded md:w-4/5 bg-white p-6 overflow-auto'>
                <table className="table-auto text-left text-primary-color w-full md:text-tableText text-sm">
                    <thead className='border-b border-border-color py-8'>
                        <tr >
                            <th className="tableh">Name</th>
                            <th className="tableh">Phone number</th>
                            <th className="tableh">Email address</th>
                            <th className="tableh"></th>
                        </tr>
                    </thead>
                    <tbody >
                    <tr className=' text-placeholder-color font-bold'>
                        <td className='px-4 pt-6 w-1/4 rounded pb-3'>
                         Contacts({contacts ? contacts.length : 0})
                        </td>
                    </tr>
                        {contacts && contacts.map(contact => {
                            return (
                                    <tr className={"hover:bg-hover-green hover:rounded-md " + styles.row} key={contact.documentId}>
                                    <td className="px-4 py-2 w-1/4 rounded">
                                        <div className='flex justify-start align-start'>
                                            <div className='initialNameDiv w-1/3'>
                                                <p className=' text-white font-bold self-center text-sm'>{contact.firstName.charAt(0).toUpperCase()}</p>
                                            </div>
                                            <p className='self-center w-2/3'>{contact.firstName} {contact.lastName}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 w-1/4 rounded">{contact.phoneNumber}</td>
                                    <td className="px-4 py-2 w-1/4 rounded">{contact.address}</td>

                                    <td className="px-4 py-2 w-1/4 rounded text-right" >
                                        <div className={" " + styles.editIcon}>
                                            <img src={editIcon} alt='edit icon' className='h-4 w-4 md:mr-6 mr-1'/>
                                            <img src={deleteIcon} alt='delete icon' className='h-4 w-4 '/>
                                        </div>
                                    </td>
                                    </tr>
                                    )
                                })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginSuccessTime: state.auth.loginSuccessTime
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
