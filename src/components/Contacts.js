import React, { useState } from 'react';
import CustomHeader from './CustomHeader';
import { Button }from 'rsuite';
import CreateContact from './CreateContact';

function Contacts() {
    const [showContactForm, setShowContactForm] = useState(false)

    const handleSHowContact = () => {
        setShowContactForm(true)
    }
    return (
        <div>
            <CustomHeader text="Logout"/>
            <CreateContact
                showContactForm={showContactForm}
                setShowContactForm={setShowContactForm}
            />
            <div className='bg-background-color min-h-minH mt-1 flex md:p-12'>
                <div className='w-1/5 mr-6'>
                    <Button className='bg-primary-color w-full rounded p-3 text-sm text-white font-bold mb-2' type='submit' onClick={() => handleSHowContact()}>
                    + Create contact
                    </Button>
                    <Button className='bg-hover-green w-full rounded p-3 text-sm text-primary-color font-bold' type='submit'>
                    Contacts
                    </Button>
                </div>
                <div className='border border-border-color rounded w-4/5 bg-white p-6'>
                <table className="table-auto text-left text-primary-color ">
                    <thead className='border-b border-border-color py-8'>
                        <tr>
                        <th className="px-4 py-3 w-1/4 mb-6">Name</th>
                        <th className="px-4 py-3 w-1/4 mb-6">Phone number</th>
                        <th className="px-4 py-3 w-1/4 mb-6">Email address</th>
                        </tr>
                    </thead>
                    <p className='px-4 text-placeholder-color mb-3 mt-6 font-bold'>Contacts(11)</p>
                    <tbody>
                        <tr className="hover:bg-hover-green hover:rounded-md">
                        <td className="px-4 py-3 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-3 w-1/4">2738490164</td>
                        <td className="px-4 py-3 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green hover:rounded-md">
                        <td className="px-4 py-3 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-3 w-1/4">2738490164</td>
                        <td className="px-4 py-3 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green hover:rounded-md">
                        <td className="px-4 py-3 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-3 w-1/4">2738490164</td>
                        <td className="px-4 py-3 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green hover:rounded">
                        <td className="px-4 py-3 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-3 w-1/4">2738490164</td>
                        <td className="px-4 py-3 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green hover:rounded">
                        <td className="px-4 py-4 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-4 w-1/4">2738490164</td>
                        <td className="px-4 py-4 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green hover:rounded">
                        <td className="px-4 py-4 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-4 w-1/4">2738490164</td>
                        <td className="px-4 py-4 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green">
                        <td className="px-4 py-4 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-4 w-1/4">2738490164</td>
                        <td className="px-4 py-4 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                        <tr className="hover:bg-hover-green">
                        <td className="px-4 py-4 w-1/4">Umeh Chiamaka</td>
                        <td className="px-4 py-4 w-1/4">2738490164</td>
                        <td className="px-4 py-4 w-1/4">amakaumeh01@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <h1>hey hnn</h1>
        </div>
    )
}

export default Contacts
