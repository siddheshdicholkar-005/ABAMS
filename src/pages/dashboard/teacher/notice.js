import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function TeacherNotice() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [noticeData, setNoticeData] = useState({
    title: '',
    class: '',
    priority: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Notice published successfully!');
    setShowCreateForm(false);
    setNoticeData({ title: '', class: '', priority: '', message: '' });
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
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Notices</h2>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {showCreateForm ? 'Cancel' : 'Create Notice'}
          </button>
        </div>

        {showCreateForm && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3>Create Notice</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Notice Title:</label>
                  <input
                    type="text"
                    value={noticeData.title}
                    onChange={(e) => setNoticeData({...noticeData, title: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    placeholder="Notice title"
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>For Class:</label>
                  <select
                    value={noticeData.class}
                    onChange={(e) => setNoticeData({...noticeData, class: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="all">All Classes</option>
                    <option value="10-A">10-A</option>
                    <option value="10-B">10-B</option>
                    <option value="11-A">11-A</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px' }}>Priority:</label>
                  <select
                    value={noticeData.priority}
                    onChange={(e) => setNoticeData({...noticeData, priority: e.target.value})}
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    required
                  >
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                <textarea
                  value={noticeData.message}
                  onChange={(e) => setNoticeData({...noticeData, message: e.target.value})}
                  rows="5"
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                  placeholder="Write your notice message here..."
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Publish Notice
              </button>
            </form>
          </div>
        )}

        <div style={{
          display: 'grid',
          gap: '15px'
        }}>
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            borderLeft: '5px solid #e74c3c'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <h3 style={{ color: '#2c3e50', margin: 0 }}>Important: Test Postponed</h3>
              <span style={{ 
                padding: '4px 8px', 
                backgroundColor: '#e74c3c', 
                color: 'white', 
                borderRadius: '4px', 
                fontSize: '12px' 
              }}>
                HIGH
              </span>
            </div>
            <p style={{ color: '#666', marginBottom: '10px' }}>For: Class 10-A | Published: 2024-02-01</p>
            <p>The mathematics mid-term test scheduled for February 15th has been postponed to February 20th due to unforeseen circumstances.</p>
          </div>

          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            borderLeft: '5px solid #f39c12'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <h3 style={{ color: '#2c3e50', margin: 0 }}>Assignment Submission Reminder</h3>
              <span style={{ 
                padding: '4px 8px', 
                backgroundColor: '#f39c12', 
                color: 'white', 
                borderRadius: '4px', 
                fontSize: '12px' 
              }}>
                MEDIUM
              </span>
            </div>
            <p style={{ color: '#666', marginBottom: '10px' }}>For: All Classes | Published: 2024-01-28</p>
            <p>Please submit your physics assignments by February 5th. Late submissions will not be accepted.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
