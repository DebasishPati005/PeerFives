import React, { useState, useEffect } from 'react';
import { UserResponse } from '../types';

const AllUser = () => {
    const [allUsers, setAllUsers] = useState<UserResponse[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('http://localhost:8080/user/all', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                });
                if (!resp.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await resp.json();
                setAllUsers(data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (allUsers.length === 0) {
        return <h1>No User Exist in DB</h1>;
    }

    return (
        <>
            <h2>User Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>P5 Balance</th>
                        <th>Reward Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.p5_balance}</td>
                            <td>{user.reward_balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default AllUser;
