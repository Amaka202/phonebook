import React, { useState } from 'react';
import CustomHeader from './CustomHeader';
import { Button }from 'rsuite';
import {useHistory} from 'react-router-dom';
import CreateContact from './CreateContact';
import CustomLoader from './CustomLoader';
import {db} from '../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// import deleteIcon from '../images/deleteIcon.png';
// import editIcon from '../images/edit.png'; 
// import HoverableComponent from './HoverableComponent';
import {connect} from 'react-redux';
import {logOut} from '../store/actionCreators/authAction';

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
                    <Button className='bg-primary-color w-full rounded p-3 text-sm text-white font-bold mb-2' type='submit' onClick={() => handleSHowContact()}>
                    + Create contact
                    </Button>
                    <Button className='bg-hover-green w-full rounded p-3 text-sm text-primary-color font-bold' type='submit'>
                    Contacts
                    </Button>
                </div>
                <div className='border border-border-color rounded md:w-4/5 bg-white p-6 overflow-auto'>
                <table className="table-auto text-left text-primary-color w-full text-base">
                    <thead className='border-b border-border-color py-8'>
                        <tr >
                        <th className="tableh">Name</th>
                        <th className="tableh">Phone number</th>
                        <th className="tableh">Email address</th>
                        <th className="tableh"></th>
                        </tr>
                    </thead>
                    <p className='px-4 text-placeholder-color mb-3 mt-6 font-bold'>Contacts({contacts ? contacts.length : 0})</p>
                        {contacts && contacts.map(contact => {
                            return (
                                <tbody key={contact.documentId}>
                                   
                                    <tr className="hover:bg-hover-green hover:rounded-md" >
                                    <td className="px-4 py-3 w-1/5">
                                        <div className='flex justify-start align-start'>
                                            <div className='initialNameDiv'>
                                                <p className=' text-white font-bold self-center text-sm'>{contact.firstName.charAt(0)}</p>
                                            </div>
                                            <p className='self-center'>{contact.firstName} {contact.lastName}</p>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 w-1/5">{contact.phoneNumber}</td>
                                    <td className="px-4 py-3 w-1/5">{contact.address}</td>

                                    <td className="px-4 py-3 w-1/5" >
                                        
                                    </td>
                                    </tr>
                                    {/* <button onClick={deletedoc(contact.documentId)}>DELETE</button> */}
                                </tbody>
                            )

                        })}
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
