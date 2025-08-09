import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function CoordinatorStudentInfo() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { id: 1, name: 'Alice Johnson', rollNo: '001', email: 'alice@email.com', phone: '123-456-7890', parent: 'Mr. Johnson', parentPhone: '123-456-7891' },
    { id: 2, name: 'Bob Wilson', rollNo: '002', email: 'bob@email.com', phone: '123-456-7892', parent: 'Mrs. Wilson', parentPhone: '123-456-7893' },
    { id: 3, name: 'Carol Davis', rollNo: '003', email: 'carol@email.com', phone: '123-456-7894', parent: 'Mr. Davis', parentPhone: '123-456-7895' }
  ];

  return (
    <DashboardLayout requiredRole="coordinator">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Student Information</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3>Student List</h3>
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th style={{ padding: 12, textAlign: 'left' }}>Name</th>
                    <th style={{ padding: 12, textAlign: 'center' }}>Roll No.</th>
                    <th style={{ padding: 12, textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id} style={{ backgroundColor: selectedStudent?.id === student.id ? '#e3f2fd' : 'transparent' }}>
                      <td style={{ padding: 12 }}>{student.name}</td>
                      <td style={{ padding: 12, textAlign: 'center' }}>{student.rollNo}</td>
                      <td style={{ padding: 12, textAlign: 'center' }}>
                        <button
                          onClick={() => setSelectedStudent(student)}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3>Student Details</h3>
            {selectedStudent ? (
              <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#f8f9fa'
              }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>{selectedStudent.name}</h4>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Roll Number:</strong> {selectedStudent.rollNo}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Email:</strong> {selectedStudent.email}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Phone:</strong> {selectedStudent.phone}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Parent/Guardian:</strong> {selectedStudent.parent}
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong>Parent Contact:</strong> {selectedStudent.parentPhone}
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#2ecc71',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    Contact Parent
                  </button>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#f39c12',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    View Performance
                  </button>
                  <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                    View Attendance
                  </button>
                </div>
              </div>
            ) : (
              <div style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '40px',
                textAlign: 'center',
                color: '#666',
                backgroundColor: '#f8f9fa'
              }}>
                Select a student to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
