import React from 'react';
import MonthList from "../month-list/month-list";
import UsersList from "../users-list/users-list";

function App() {
    return (
    <div className="app">
        <MonthList />
        <UsersList />
    </div>
  );
}

export default App;
