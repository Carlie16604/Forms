import React, { useState } from 'react';

function SignUpForm() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
    event.preventDefault()
    console.error('NEVER BACK DOWN NEVER WHAT?')
    }
    
    return (
        <>
        <h2>Sign-Up Form</h2>
            <form onSubmit={handleSubmit}> 
                    <label>
                        Username: <input value={user} onChange={(e)=> setUser(e.target.value)}/>
                    </label>
                    <label>
                        Password: <input />
                    </label>
                    <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm