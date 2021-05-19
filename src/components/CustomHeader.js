import React from 'react'

function Header() {
    return (
        <div className='flex justify-between align-center md:px-12 md:py-6 px-6 py-6 shadow-bottom'>
            <p className='text-primary-color md:text-4xl text-2xl font-bold self-center'>Phonebook</p>
            <p className='text-primary-color md:text-base text-sm self-center'>Login</p>
        </div>
    )
}

export default Header
