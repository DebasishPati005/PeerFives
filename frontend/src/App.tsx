import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Page404 from './Page404';
import AllUser from './users/AllUser';
import NewUser from './users/NewUser';
import ViewUser from './users/ViewUser';
import NewReward from './rewards/NewReward';
import RewardHistory from './rewards/RewardHistory';
import P5_History from './rewards/P5_History';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="new" element={<NewUser />} />
                    <Route path=":id/view" element={<ViewUser />} />
                    <Route path=":id/p5" element={<P5_History />} />
                    <Route path=":id/rewards" element={<RewardHistory />} />
                    <Route path=":id/rewards/new" element={<NewReward />} />
                    <Route path="/" element={<AllUser />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
                <Outlet />
            </BrowserRouter>
        </div>
    );
}
export default App;
