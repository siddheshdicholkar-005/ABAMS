import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function HODManageTimetable() {
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [showEditForm, setShowEditForm] = useState(false);

  const timetableData = {
    '10-A': [
      { time: '9:00-10:00', monday: 'Mathematics', tuesday: 'Physics', wednesday: 'Chemistry', thursday: 'Biology', friday: 'English', saturday: 'Mathematics' },
      { time: '10:15-11:15', monday: 'Physics', tuesday: 'Chemistry', wednesday: 'Mathematics', thursday: 'English', friday: 'Biology', saturday: 'Physics' },
      { time: '11:30-12:30', monday: 'Chemistry', tuesday: 'Biology', wednesday: 'English', thursday: 'Mathematics', friday: 'Physics', saturday: 'Chemistry' },
      { time: '1:30-2:30', monday: 'Biology', tuesday: 'English', wednesday: 'Physics', thursday: 'Chemistry', friday: 'Mathematics', saturday: 'Biology' },
      { time: '2:45-3:45', monday: 'English', tuesday: 'Mathematics', wednesday: 'Biology', thursday: 'Physics', friday: 'Chemistry', saturday: 'English' }
    ]
  };

  const classes = ['10-A', '10-B', '11-A', '11-B', '12-A', '12-B'];

  return (
    <DashboardLayout requiredRole="hod">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Timetable Management</h2>
          <button
            onClick={() => setShowEditForm(!showEditForm)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {showEditForm ? 'Cancel Edit' : 'Edit Timetable'}
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Select Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd', minWidth: '150px' }}
          >
            {classes.map(cls => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                <th style={{ padding: 12, textAlign: 'center' }}>Time</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Monday</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Tuesday</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Wednesday</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Thursday</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Friday</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Saturday</th>
              </tr>
            </thead>
            <tbody>
              {timetableData[selectedClass]?.map((slot, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white' }}>
                  <td style={{ padding: 12, textAlign: 'center', fontWeight: 'bold', backgroundColor: '#3498db', color: 'white' }}>
                    {slot.time}
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>{slot.monday}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>{slot.tuesday}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>{slot.wednesday}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>{slot.thursday}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>{slot.friday}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>{slot.saturday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showEditForm && (
          <div style={{
            marginTop: '30px',
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <h3>Edit Timetable for {selectedClass}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
              <button style={{
                padding: '12px',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Add New Period
              </button>
              <button style={{
                padding: '12px',
                backgroundColor: '#f39c12',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Modify Existing
              </button>
              <button style={{
                padding: '12px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Delete Period
              </button>
              <button style={{
                padding: '12px',
                backgroundColor: '#9b59b6',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Auto Generate
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
