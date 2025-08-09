import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function HODComplaints() {
  const [activeTab, setActiveTab] = useState('received');
  const [showForm, setShowForm] = useState(false);
  const [complaintData, setComplaintData] = useState({
    category: '',
    subject: '',
    description: ''
  });

  const receivedComplaints = [
    { id: 1, from: 'Dr. Smith', fromType: 'Staff', subject: 'Insufficient lab equipment', category: 'Infrastructure', status: 'Open', submittedOn: '2024-02-10' },
    { id: 2, from: 'Alice Johnson', fromType: 'Student', subject: 'Teacher late to class', category: 'Staff Behavior', status: 'In Progress', submittedOn: '2024-02-08' }
  ];

  const myComplaints = [
    { id: 3, subject: 'Budget allocation issues', category: 'Administration', status: 'Pending', submittedOn: '2024-02-05' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
    setShowForm(false);
    setComplaintData({ category: '', subject: '', description: '' });
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
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Complaints Management</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {showForm ? 'Cancel' : 'File Complaint'}
          </button>
        </div>

        {showForm && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3>Submit Complaint</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
                <select
                  value={complaintData.category}
                  onChange={(e) => setComplaintData({...complaintData, category: e.target.value})}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="administration">Administration</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="budget">Budget/Resources</option>
                  <option value="policy">Policy Issues</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Subject:</label>
                <input
                  type="text"
                  value={complaintData.subject}
                  onChange={(e) => setComplaintData({...complaintData, subject: e.target.value})}
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  placeholder="Brief subject of your complaint"
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
                <textarea
                  value={complaintData.description}
                  onChange={(e) => setComplaintData({...complaintData, description: e.target.value})}
                  rows="5"
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  placeholder="Please provide detailed description..."
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Submit Complaint
              </button>
            </form>
          </div>
        )}

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('received')}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === 'received' ? '#3498db' : '#ecf0f1',
              color: activeTab === 'received' ? 'white' : '#2c3e50',
              border: 'none',
              borderRadius: '5px 0 0 5px',
              cursor: 'pointer'
            }}
          >
            Received Complaints ({receivedComplaints.length})
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
            My Complaints ({myComplaints.length})
          </button>
        </div>

        {activeTab === 'received' && (
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: 12, textAlign: 'left' }}>From</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Type</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Subject</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Category</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Date</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {receivedComplaints.map(complaint => (
                  <tr key={complaint.id} style={{ backgroundColor: complaint.id % 2 === 0 ? '#f8f9fa' : 'transparent' }}>
                    <td style={{ padding: 12 }}>{complaint.from}</td>
                    <td style={{ padding: 12 }}>{complaint.fromType}</td>
                    <td style={{ padding: 12 }}>{complaint.subject}</td>
                    <td style={{ padding: 12 }}>{complaint.category}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: complaint.status === 'Open' ? '#e74c3c' : '#f39c12', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        {complaint.status}
                      </span>
                    </td>
                    <td style={{ padding: 12 }}>{complaint.submittedOn}</td>
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
                        View
                      </button>
                      <button style={{
                        padding: '6px 12px',
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}>
                        Resolve
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
                  <th style={{ padding: 12, textAlign: 'left' }}>Subject</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Category</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                  <th style={{ padding: 12, textAlign: 'left' }}>Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {myComplaints.map(complaint => (
                  <tr key={complaint.id}>
                    <td style={{ padding: 12 }}>{complaint.subject}</td>
                    <td style={{ padding: 12 }}>{complaint.category}</td>
                    <td style={{ padding: 12, textAlign: 'center' }}>
                      <span style={{ 
                        padding: '4px 8px', 
                        backgroundColor: '#f39c12', 
                        color: 'white', 
                        borderRadius: '4px', 
                        fontSize: '12px' 
                      }}>
                        {complaint.status}
                      </span>
                    </td>
                    <td style={{ padding: 12 }}>{complaint.submittedOn}</td>
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
