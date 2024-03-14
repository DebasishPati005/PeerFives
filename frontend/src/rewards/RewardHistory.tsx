import React from 'react';

const RewardHistory = () => {
    return (
        <div className="card-container">
            <div className="card">
                <h1>Reward History</h1>
                <div className="card-content">
                    <label>Name:</label>
                    <p>{'User'}</p>
                </div>
                <div className="card-content">
                    <label>P5 Balance:</label>
                    <p>{'Point'}</p>
                </div>
                <div className="card-content">
                    <label>Reward Balance:</label>
                    <p>{'Point'}</p>
                </div>
            </div>
        </div>
    );
};

export default RewardHistory;
