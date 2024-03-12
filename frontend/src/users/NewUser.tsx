import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
    const navigate = useNavigate();

    const saveUser = async (name: string) => {
        try {
            const resp = await fetch('http://localhost:8080/user/create', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ name }),
            });
            if (!resp.ok) {
                throw new Error('Failed to fetch data');
            }
            await resp.json();
            navigate('/');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        console.log(name);
        saveUser(name);
    };

    return (
        <div className="form-container">
            <form className="styled-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                />

                <div className="btns">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Cancel" />
                </div>
            </form>
        </div>
    );
};

export default NewUser;
