import DashboardLayout from '../../../components/DashboardLayout';

export default function CoordinatorAttendance() {
  return (
    <DashboardLayout requiredRole="coordinator">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Class Attendance Overview</h2>
        
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
            <h3>Overall Class Average</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>88%</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Present Today</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>42/45</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#e74c3c',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Absent Today</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>3</p>
          </div>
        </div>

        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: 12, textAlign: 'left' }}>Student Name</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Roll No.</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Total Classes</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Present</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Percentage</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>John Doe</td>
                <td style={{ padding: 12, textAlign: 'center' }}>001</td>
                <td style={{ padding: 12, textAlign: 'center' }}>50</td>
                <td style={{ padding: 12, textAlign: 'center' }}>47</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#2ecc71' }}>94%</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#2ecc71', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    Good
                  </span>
                </td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Jane Smith</td>
                <td style={{ padding: 12, textAlign: 'center' }}>002</td>
                <td style={{ padding: 12, textAlign: 'center' }}>50</td>
                <td style={{ padding: 12, textAlign: 'center' }}>35</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#e74c3c' }}>70%</td>
                <td style={{ padding: 12, textAlign: 'center' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    backgroundColor: '#e74c3c', 
                    color: 'white', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    Low
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
