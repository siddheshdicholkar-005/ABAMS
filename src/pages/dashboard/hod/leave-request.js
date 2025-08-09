import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function HODLeaveRequest() {
  const [activeTab, setActiveTab] = useState('pending');
  const [showForm, setShowForm] = useState(false);
  const [leaveData, setLeaveData] = useState({
    reason: '',
    fromDate: '',
    toDate: '',
    description: ''
  });

  const pendingRequests = [
    { id: 1, staff: 'Dr. Smith', subject: 'Mathematics', reason: 'Medical', dates: '2024-02-15 to 2024-02-17', submittedOn: '2024-02-10' },
    { id: 2, staff: 'Prof. Johnson', subject: 'Physics', reason: 'Personal', dates: '2024-02-20 to 2024-02-21', submittedOn: '2024-02-12' }
  ];

  const myRequests = [
    { id: 3, reason: 'Conference', dates: '2024-01-15 to 2024-01-17', status: 'Approved', submittedOn: '2024-01-10' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Leave request submitted successfully!');
    setShowForm(false);
    setLeaveData({ reason: '', fromDate: '', toDate: '', description: '' });
  };

  const handleApprove = (id) => {
    alert(`Leave request ${id} approved!`);
  };

  const handleReject = (id) => {
    alert(`Leave request ${id} rejected!`);
  };

  return (
    <DashboardLayout requiredRole="hod">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Leave Management</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {showForm ? 'Cancel' : 'Apply for Leave'}
          </button>
        </div>

        {showForm && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3>Apply for Leave</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Leave Type:</label>
                <select
                  value={leaveData.reason}
                  onChange={(e) => setLeaveData({...leaveData, reason: e.target.value})}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  required
                >
                  <option value="">Select Leave Type</option>
                  <option value="sick">Sick Leave</option>
                  <option value="personal">Personal Leave</option>
                  <option value="conference">Conference/Training</option>
                  <option value="emergency">Emergency Leave</option>
                  <option value="vacation">Vacation</option>
                </select>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>From Date:</label>
                  <input
                    type="date"
                    value={leaveData.fromDate}
                    onChange={(e) => setLeaveData({...leaveData, fromDate: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>To Date:</label>
                  <input
                    type="date"
                    value={leaveData.toDate}
                    onChange={(e) => setLeaveData({...leaveData, toDate: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  />
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Reason:</label>
                <textarea
                  value={leaveData.description}
                  onChange={(e) => setLeaveData({...leaveData, description: e.target.value})}
                  rows="4"
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  placeholder="Please provide reason for leave..."
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Submit Application
              </button>
            </form>
          </div>
        )}

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('pending')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'pending' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'pending' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '5px 0 0 5px',
              cursor: 'pointer'
            }}
          >
            Staff Requests ({pendingRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('mine')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'mine' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'mine' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer'
            }}
          >
            My Requests ({myRequests.length})
          </button>
        </div>

        {activeTab === 'pending' && (
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: 12, textAlign: 'left' }}>Staff Member</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Subject</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Reason</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Date Range</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Submitted</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map(request => (
                  <tr key={request.id} style={{ backgroundColor: request.id % 2 === 0 ? '#f8f9fa' : 'transparent' }}>
                    <td style={{ padding: 12 }}>{request.staff}</td>
                    <td style={{ padding: 12 }}>{request.subject}</td>
                    <td style={{ padding: 12 }}>{request.reason}</td>
                    <td style={{ padding: 12 }}>{request.dates}</td>
                    <td style={{ padding: 12 }}>{request.submittedOn}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <button
                        onClick={() => handleApprove(request.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#2ecc71',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          marginRight: '5px'
                        }}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#e74c3c',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'mine' && (
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: 12, textAlign: 'left' }}>Leave Type</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Date Range</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {myRequests.map(request => (
                  <tr key={request.id}>
                    <td style={{ padding: 12 }}>{request.reason}</td>
                    <td style={{ padding: 12 }}>{request.dates}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#2ecc71', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        {request.status}
                      </span>
                    </td>
                    <td style={{ padding: 12 }}>{request.submittedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
