import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function CoordinatorLeaveRequest() {
  const [activeTab, setActiveTab] = useState('pending');

  const pendingRequests = [
    { id: 1, student: 'Alice Johnson', rollNo: '001', reason: 'Sick', dates: '2024-02-15 to 2024-02-17', submittedOn: '2024-02-10' },
    { id: 2, student: 'Bob Wilson', rollNo: '002', reason: 'Family Function', dates: '2024-02-20 to 2024-02-21', submittedOn: '2024-02-12' }
  ];

  const processedRequests = [
    { id: 3, student: 'Carol Davis', rollNo: '003', reason: 'Medical', dates: '2024-01-15 to 2024-01-17', status: 'Approved', processedOn: '2024-01-10' },
    { id: 4, student: 'David Brown', rollNo: '004', reason: 'Personal', dates: '2024-01-20 to 2024-01-22', status: 'Rejected', processedOn: '2024-01-18' }
  ];

  const handleApprove = (id) => {
    alert(`Leave request ${id} approved!`);
  };

  const handleReject = (id) => {
    alert(`Leave request ${id} rejected!`);
  };

  return (
    <DashboardLayout requiredRole="coordinator">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Student Leave Requests</h2>

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
            Pending Requests ({pendingRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('processed')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'processed' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'processed' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer'
            }}
          >
            Processed Requests
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
                  <th style={{ padding: 12, textAlign: 'left' }}>Student</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Roll No.</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Reason</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Date Range</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Submitted</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map(request => (
                  <tr key={request.id}>
                    <td style={{ padding: 12 }}>{request.student}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>{request.rollNo}</td>
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

        {activeTab === 'processed' && (
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: 12, textAlign: 'left' }}>Student</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Roll No.</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Reason</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Date Range</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Processed On</th>
                </tr>
              </thead>
              <tbody>
                {processedRequests.map(request => (
                  <tr key={request.id} style={{ backgroundColor: request.id % 2 === 0 ? '#f8f9fa' : 'transparent' }}>
                    <td style={{ padding: 12 }}>{request.student}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>{request.rollNo}</td>
                    <td style={{ padding: 12 }}>{request.reason}</td>
                    <td style={{ padding: 12 }}>{request.dates}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: request.status === 'Approved' ? '#2ecc71' : '#e74c3c', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        {request.status}
                      </span>
                    </td>
                    <td style={{ padding: 12 }}>{request.processedOn}</td>
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
