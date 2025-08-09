import DashboardLayout from '../../components/DashboardLayout';

export default function HODDashboard() {
  return (
    <DashboardLayout requiredRole="hod">
      <div style={{ padding: 20 }}>
        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>HOD Home</h2>
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
              <h3>Faculty</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>25</p>
              <p>Department Staff</p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: '#2ecc71',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Department Performance</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>92%</p>
              <p>Overall Rating</p>
            </div>
            <div style={{
              padding: '20px',
              backgroundColor: '#e74c3c',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Staff Requests</h3>
              <p style={{ fontSize: '24px', margin: '10px 0' }}>12</p>
              <p>Pending Actions</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
