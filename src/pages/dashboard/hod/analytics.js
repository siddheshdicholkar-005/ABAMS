import DashboardLayout from '../../../components/DashboardLayout';
import { useState } from 'react';

export default function HODAnalytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  return (
    <DashboardLayout requiredRole="hod">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#2c3e50', margin: 0 }}>Department Analytics</h2>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {/* Key Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
            <h3>Department Average</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>92%</p>
            <p>Overall Performance</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Staff Attendance</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>96%</p>
            <p>Average Rate</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#f39c12',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Student Satisfaction</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>4.3/5</p>
            <p>Feedback Score</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#9b59b6',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Course Completion</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>89%</p>
            <p>Syllabus Coverage</p>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Subject-wise Performance</h3>
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: 12, textAlign: 'left' }}>Subject</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Teacher</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Average Grade</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Pass Rate</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Student Feedback</th>
                  <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 12 }}>Mathematics</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>Dr. Smith</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>B+</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>94%</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>4.5/5</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#2ecc71', 
                      color: 'white', 
                      borderRadius: '4px', 
                      fontSize: '12px' 
                    }}>
                      Excellent
                    </span>
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <td style={{ padding: 12 }}>Physics</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>Prof. Johnson</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>B</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>87%</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>4.2/5</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#3498db', 
                      color: 'white', 
                      borderRadius: '4px', 
                      fontSize: '12px' 
                    }}>
                      Good
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 12 }}>Chemistry</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>Ms. Davis</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>B-</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>82%</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>3.9/5</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      backgroundColor: '#f39c12', 
                      color: 'white', 
                      borderRadius: '4px', 
                      fontSize: '12px' 
                    }}>
                      Needs Improvement
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Class-wise Analysis */}
        <div>
          <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Class-wise Analysis</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {['10-A', '10-B', '11-A'].map(className => (
              <div key={className} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#f8f9fa'
              }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Class {className}</h4>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Students:</strong> 45
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Average Attendance:</strong> 91%
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Average Performance:</strong> B+
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong>Top Performer:</strong> John Doe
                </div>
                <button style={{
                  padding: '8px 16px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  View Detailed Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
