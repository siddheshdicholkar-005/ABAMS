import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function TeacherTest() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [testData, setTestData] = useState({
    title: '',
    subject: '',
    class: '',
    date: '',
    duration: '',
    totalMarks: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Test created successfully!');
    setShowCreateForm(false);
    setTestData({ title: '', subject: '', class: '', date: '', duration: '', totalMarks: '' });
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
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Tests & Examinations</h2>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {showCreateForm ? 'Cancel' : 'Create Test'}
          </button>
        </div>

        {showCreateForm && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3>Create New Test</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Test Title:</label>
                  <input
                    type="text"
                    value={testData.title}
                    onChange={(e) => setTestData({...testData, title: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="e.g., Mid-term Mathematics"
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Subject:</label>
                  <select
                    value={testData.subject}
                    onChange={(e) => setTestData({...testData, subject: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Class:</label>
                  <select
                    value={testData.class}
                    onChange={(e) => setTestData({...testData, class: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="10-A">10-A</option>
                    <option value="10-B">10-B</option>
                    <option value="11-A">11-A</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Date:</label>
                  <input
                    type="date"
                    value={testData.date}
                    onChange={(e) => setTestData({...testData, date: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Duration (mins):</label>
                  <input
                    type="number"
                    value={testData.duration}
                    onChange={(e) => setTestData({...testData, duration: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="90"
                    required
                  />
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Total Marks:</label>
                <input
                  type="number"
                  value={testData.totalMarks}
                  onChange={(e) => setTestData({...testData, totalMarks: e.target.value})}
                  style={{ width: '200px', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  placeholder="100"
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
                Create Test
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
                <th style={{ padding: 12, textAlign: 'left' }}>Test Title</th>
                <th style={{ padding: 12, textAlign: 'left' }}>Class</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Date</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>Mid-term Mathematics</td>
                <td style={{ padding: 12 }}>10-A</td>
                <td style={{ padding: 12, textAlign: 'center' }}>2024-02-15</td>
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
                    Grade
                  </button>
                  <button style={{
                    padding: '6px 12px',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    View
                  </button>
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Unit Test Physics</td>
                <td style={{ padding: 12 }}>10-B</td>
                <td style={{ padding: 12, textAlign: 'center' }}>2024-02-10</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#2ecc71', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    Completed
                  </span>
                </td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <button style={{
                    padding: '6px 12px',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    View Results
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
