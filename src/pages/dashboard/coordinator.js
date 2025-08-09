import DashboardLayout from '../../components/DashboardLayout';

export default function CoordinatorDashboard() {
  return (
    <DashboardLayout requiredRole="coordinator">
      <div style={{ padding: 20 }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Class Coordinator Home</h2>
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
              <h3>Class Attendance</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>88%</p>
              <p>Average</p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Students</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>45</p>
              <p>In My Class</p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: '#f39c12',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Leave Requests</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>7</p>
              <p>Pending Approval</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
