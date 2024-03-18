import React from 'react';
import UserList from '../components/UserList';
import UserChart from '../components/UserChart';

function AdminDashboardPage() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-7" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}> 
          <UserList />
        </div>
        <div className="col-md-5">
          <UserChart />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;