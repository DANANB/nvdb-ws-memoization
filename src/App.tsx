import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigation} from './Navigation';

const Home = () => <div>Home Page</div>;
const Memo = () => <div>Memo Page</div>;
const UseCallback = () => <div>UseCallback Page</div>;
const UseMemo = () => <div>UseMemo Page</div>;
const NotFound = () => <div>404 Not Found</div>;

export const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/useCallback" element={<UseCallback />} />
                <Route path="/useMemo" element={<UseMemo />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
