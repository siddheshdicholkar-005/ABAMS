import DashboardLayout from '../../../components/DashboardLayout';

export default function TeacherClasses() {
  return (
    <DashboardLayout requiredRole="teacher">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>My Classes</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Class 10-A Mathematics</h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Students:</strong> 35
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Time:</strong> 9:00 AM - 10:00 AM
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Days:</strong> Monday, Wednesday, Friday
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Room:</strong> 205
            </div>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}>
              Take Attendance
            </button>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View Students
            </button>
          </div>

          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Class 10-B Mathematics</h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Students:</strong> 32
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Time:</strong> 10:15 AM - 11:15 AM
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Days:</strong> Tuesday, Thursday, Saturday
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Room:</strong> 205
            </div>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}>
              Take Attendance
            </button>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View Students
            </button>
          </div>

          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#f8f9fa'
          }}>
            <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Class 11-A Advanced Math</h3>
            <div style={{ marginBottom: '10px' }}>
              <strong>Students:</strong> 28
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Time:</strong> 2:00 PM - 3:00 PM
            </div>
            <div style={{ marginBottom: '10px' }}>
              <strong>Days:</strong> Monday, Wednesday, Friday
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Room:</strong> 307
            </div>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}>
              Take Attendance
            </button>
            <button style={{
              padding: '8px 16px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              View Students
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
