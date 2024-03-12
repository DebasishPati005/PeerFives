import React from 'react';
import { UserResponse } from '../types';
import { useNavigate, useParams } from 'react-router-dom';

const ViewUser = () => {
    const [userData, setUserData] = React.useState<UserResponse | null>();
    const params = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(
                    `http://localhost:8080/user/get/${params.id}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'GET',
                    }
                );
                if (!resp.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await resp.json();
                setUserData(data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const updateUser = async (name: string, p5_balance: number) => {
        try {
            const resp = await fetch('http://localhost:8080/user/create', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ name, p5_balance }),
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
        const p5 = formData.get('p5') as string;
        updateUser(name, +p5);
    };

    if (!userData) {
        return <>Loading</>;
    }
    return (
        <div className="form-container">
            <form className="styled-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    placeholder="Enter your name"
                    required
                />

                <label>P5 Balance:</label>
                <input
                    type="number"
                    id="p5"
                    name="p5"
                    value={userData.p5_balance}
                    required
                />
                <label>Reward Balance:</label>
                <input
                    type="number"
                    id="reward"
                    name="reward"
                    value={userData.reward_balance}
                    disabled
                    required
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ViewUser;
