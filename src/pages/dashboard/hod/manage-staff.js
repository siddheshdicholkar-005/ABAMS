import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function HODManageStaff() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const staffMembers = [
    { id: 1, name: 'Dr. Smith', subject: 'Mathematics', experience: '10 years', performance: 'Excellent' },
    { id: 2, name: 'Prof. Johnson', subject: 'Physics', experience: '8 years', performance: 'Good' },
    { id: 3, name: 'Ms. Davis', subject: 'Chemistry', experience: '5 years', performance: 'Good' },
    { id: 4, name: 'Mr. Wilson', subject: 'Biology', experience: '12 years', performance: 'Excellent' }
  ];

  return (
    <DashboardLayout requiredRole="hod">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Staff Management</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Total Staff</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>{staffMembers.length}</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Present Today</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>23</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#f39c12',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>On Leave</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>2</p>
          </div>
        </div>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'overview' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'overview' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '5px 0 0 5px',
              cursor: 'pointer'
            }}
          >
            Staff Overview
          </button>
          <button
            onClick={() => setActiveTab('performance')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'performance' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'performance' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '0 5px 5px 0',
              cursor: 'pointer'
            }}
          >
            Performance Review
          </button>
        </div>

        {activeTab === 'overview' && (
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Subject</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Experience</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Performance</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {staffMembers.map(staff => (
                  <tr key={staff.id} style={{ backgroundColor: staff.id % 2 === 0 ? '#f8f9fa' : 'transparent' }}>
                    <td style={{ padding: 12 }}>{staff.name}</td>
                    <td style={{ padding: 12 }}>{staff.subject}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>{staff.experience}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: staff.performance === 'Excellent' ? '#2ecc71' : '#3498db', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        {staff.performance}
                      </span>
                    </td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#2ecc71', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        Active
                      </span>
                    </td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <button style={{
                        padding: '6px 12px',
                        backgroundColor: '#3498db',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '5px'
                      }}>
                        View Profile
                      </button>
                      <button style={{
                        padding: '6px 12px',
                        backgroundColor: '#f39c12',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}>
                        Schedule
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'performance' && (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {staffMembers.map(staff => (
                <div key={staff.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  backgroundColor: '#f8f9fa'
                }}>
                  <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>{staff.name}</h4>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>Subject:</strong> {staff.subject}
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>Student Feedback:</strong> 4.5/5.0
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>Class Completion Rate:</strong> 95%
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <strong>Overall Rating:</strong> {staff.performance}
                  </div>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Detailed Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
