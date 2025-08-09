import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function TeacherLeaveRequest() {
  const [showForm, setShowForm] = useState(false);
  const [leaveData, setLeaveData] = useState({
    reason: '',
    fromDate: '',
    toDate: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Leave request submitted successfully!');
    setShowForm(false);
    setLeaveData({ reason: '', fromDate: '', toDate: '', description: '' });
  };

  return (
    <DashboardLayout requiredRole="teacher">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#2c3e50', margin: 0 }}>My Leave Requests</h2>
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
                  <option value="emergency">Emergency Leave</option>
                  <option value="casual">Casual Leave</option>
                  <option value="maternity">Maternity/Paternity Leave</option>
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
                <th style={{ padding: 12, textAlign: 'center' }}>Days</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Applied On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>Sick Leave</td>
                <td style={{ padding: 12 }}>2024-01-15 to 2024-01-17</td>
                <td style={{ padding: 12, textAlign: 'center' }}>3</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#2ecc71', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    Approved
                  </span>
                </td>
                <td style={{ padding: 12 }}>2024-01-10</td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Personal Leave</td>
                <td style={{ padding: 12 }}>2024-02-05 to 2024-02-06</td>
                <td style={{ padding: 12, textAlign: 'center' }}>2</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#f39c12', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    Pending
                  </span>
                </td>
                <td style={{ padding: 12 }}>2024-02-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
