import React, { useState, useEffect } from 'react';
import CustomHeader from './CustomHeader';
import { Button }from 'rsuite';
import CreateContact from './CreateContact';
import {db} from '../firebase';

function Contacts() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showLastRow, setShowLastRow] = useState('none');

    const style = {
        display: showLastRow
    }
    const handleSHowContact = () => {
        setShowContactForm(true)
    }

    useEffect(() => {
        db.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
    }, [])

    return (
        <div>
            <CustomHeader text="Logout"/>
            <CreateContact
                showContactForm={showContactForm}
                setShowContactForm={setShowContactForm}
            />
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
                <table className="table-auto text-left text-primary-color w-full">
                    <thead className='border-b border-border-color py-8'>
                        <tr >
                        <th className="tableh">Name</th>
                        <th className="tableh">Phone number</th>
                        <th className="tableh">Email address</th>
                        <th className="tableh"></th>
                        </tr>
                    </thead>
                    <p className='px-4 text-placeholder-color mb-3 mt-6 font-bold'>Contacts(11)</p>
                    <tbody>
                        <tr className="hover:bg-hover-green hover:rounded-md" onMouseEnter={() => setShowLastRow('block')} onMouseLeave={() => setShowLastRow('none')}>
                        <td className="px-4 py-3 w-1/5">
                            <div className='flex justify-start align-start'>
                                <div className='initialDiv'>
                                    <p className=' text-white font-bold self-center text-xl'>J</p>
                                </div>
                                <p className='self-center'>Umeh Chiamaka</p>
                            </div>
                        </td>
                        <td className="px-4 py-3 w-1/5">2738490164</td>
                        <td className="px-4 py-3 w-1/5">amakaumeh01@gmail.com</td>
                        <td className="px-4 py-3 w-1/5" style={style}>Now!</td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Contacts
