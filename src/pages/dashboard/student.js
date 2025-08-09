import DashboardLayout from '../../components/DashboardLayout';

export default function StudentDashboard() {
  return (
    <DashboardLayout requiredRole="student">
      <div style={{ padding: 20 }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Student Home</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#3498db',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Attendance</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>85%</p>
              <p>This Month</p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Performance</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>A Grade</p>
              <p>Overall</p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: '#f39c12',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Pending</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>3</p>
              <p>Assignments</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
