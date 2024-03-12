import React from 'react';

const NewReward = () => {
    return (
        <div className="form-container">
            <form className="styled-form">
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                />

                <label>P5 Balance:</label>
                <input
                    type="number"
                    id="p5"
                    name="p5"
                    placeholder="Enter your email"
                    required
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default NewReward;
