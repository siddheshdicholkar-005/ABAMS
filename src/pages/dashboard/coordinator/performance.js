import DashboardLayout from '../../../components/DashboardLayout';

export default function CoordinatorPerformance() {
  return (
    <DashboardLayout requiredRole="coordinator">
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Class Performance Analysis</h2>
        
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
            <h3>Class Average</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>B+</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#3498db',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Top Performers</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>12</p>
          </div>
          <div style={{
            padding: '20px',
            backgroundColor: '#f39c12',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>Need Attention</h3>
            <p style={{ fontSize: '32px', margin: '10px 0' }}>5</p>
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
                <th style={{ padding: 12, textAlign: 'center' }}>Math</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Physics</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Chemistry</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Overall Grade</th>
                <th style={{ padding: 12, textAlign: 'center' }}>Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 12 }}>Alice Johnson</td>
                <td style={{ padding: 12, textAlign: 'center' }}>001</td>
                <td style={{ padding: 12, textAlign: 'center' }}>A</td>
                <td style={{ padding: 12, textAlign: 'center' }}>A</td>
                <td style={{ padding: 12, textAlign: 'center' }}>A-</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#2ecc71', fontWeight: 'bold' }}>A</td>
                <td style={{ padding: 12, textAlign: 'center' }}>1</td>
              </tr>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <td style={{ padding: 12 }}>Bob Wilson</td>
                <td style={{ padding: 12, textAlign: 'center' }}>002</td>
                <td style={{ padding: 12, textAlign: 'center' }}>B+</td>
                <td style={{ padding: 12, textAlign: 'center' }}>B</td>
                <td style={{ padding: 12, textAlign: 'center' }}>B+</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#3498db', fontWeight: 'bold' }}>B+</td>
                <td style={{ padding: 12, textAlign: 'center' }}>5</td>
              </tr>
              <tr>
                <td style={{ padding: 12 }}>Carol Davis</td>
                <td style={{ padding: 12, textAlign: 'center' }}>003</td>
                <td style={{ padding: 12, textAlign: 'center' }}>C</td>
                <td style={{ padding: 12, textAlign: 'center' }}>D+</td>
                <td style={{ padding: 12, textAlign: 'center' }}>C-</td>
                <td style={{ padding: 12, textAlign: 'center', color: '#e74c3c', fontWeight: 'bold' }}>C-</td>
                <td style={{ padding: 12, textAlign: 'center' }}>35</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
