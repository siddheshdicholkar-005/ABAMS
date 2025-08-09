import DashboardLayout from '../../../components/DashboardLayout';

export default function ParentPerformance() {
  return (
    <DashboardLayout requiredRole="parent">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Child's Performance</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Overall Grade</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>A</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>GPA</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>3.8</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#f39c12',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Class Rank</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>5th</p>
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
                <th style={{ padding: 12, textAlign: 'center' }}>Test 1</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Test 2</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Final Exam</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>Mathematics</td>
                <td style={{ padding: 12, textAlign: 'center' }}>85</td>
                <td style={{ padding: 12, textAlign: 'center' }}>88</td>
                <td style={{ padding: 12, textAlign: 'center' }}>90</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#2ecc71', fontWeight: 'bold' }}>A</td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Physics</td>
                <td style={{ padding: 12, textAlign: 'center' }}>78</td>
                <td style={{ padding: 12, textAlign: 'center' }}>82</td>
                <td style={{ padding: 12, textAlign: 'center' }}>85</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#3498db', fontWeight: 'bold' }}>B+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
