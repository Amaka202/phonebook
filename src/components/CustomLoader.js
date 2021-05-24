import React from 'react';

function CustomLoader() {
    return (
        <div>
            <div class="min-h-screen flex justify-center items-center bg-background-color">

                <div class="loader bg-white p-5 rounded-full flex space-x-3">
                <div class="w-5 h-5 bg-primary-color rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-primary-color rounded-full animate-bounce"></div>
                <div class="w-5 h-5 bg-primary-color rounded-full animate-bounce"></div>
                </div>

            </div>
        </div>
    )
}

export default CustomLoader;
