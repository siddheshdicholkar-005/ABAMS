import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function StudentComplaints() {
  const [showForm, setShowForm] = useState(false);
  const [complaintData, setComplaintData] = useState({
    category: '',
    subject: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
    setShowForm(false);
    setComplaintData({ category: '', subject: '', description: '' });
  };

  return (
    <DashboardLayout requiredRole="student">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Complaints</h2>
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
                  <option value="academic">Academic</option>
                  <option value="facility">Facility</option>
                  <option value="staff">Staff Behavior</option>
                  <option value="transport">Transport</option>
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
                  placeholder="Please provide detailed description of your complaint..."
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
              <tr>
                <td style={{ padding: 12 }}>Library AC not working</td>
                <td style={{ padding: 12 }}>Facility</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#2ecc71', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    Resolved
                  </span>
                </td>
                <td style={{ padding: 12 }}>2024-01-10</td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Unfair grading in Mathematics</td>
                <td style={{ padding: 12 }}>Academic</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#f39c12', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    In Progress
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
