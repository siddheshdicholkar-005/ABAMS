import DashboardLayout from '../../../components/DashboardLayout';

export default function StudentAttendance() {
  return (
    <DashboardLayout requiredRole="student">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>My Attendance</h2>
        
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
            <h3>Overall</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>85%</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>This Month</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>92%</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#f39c12',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Days Present</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>180</p>
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
                <th style={{ padding: 12, textAlign: 'left' }}>Subject</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Total Classes</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Present</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Absent</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>Mathematics</td>
                <td style={{ padding: 12, textAlign: 'center' }}>50</td>
                <td style={{ padding: 12, textAlign: 'center' }}>45</td>
                <td style={{ padding: 12, textAlign: 'center' }}>5</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#2ecc71' }}>90%</td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Physics</td>
                <td style={{ padding: 12, textAlign: 'center' }}>48</td>
                <td style={{ padding: 12, textAlign: 'center' }}>40</td>
                <td style={{ padding: 12, textAlign: 'center' }}>8</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#f39c12' }}>83%</td>
              </tr>
              <tr>
                <td style={{ padding: 12 }}>Chemistry</td>
                <td style={{ padding: 12, textAlign: 'center' }}>45</td>
                <td style={{ padding: 12, textAlign: 'center' }}>38</td>
                <td style={{ padding: 12, textAlign: 'center' }}>7</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#f39c12' }}>84%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
