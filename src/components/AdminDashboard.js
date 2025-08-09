import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/teachers');
      const data = await res.json();
      setTeachers(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
    setLoading(false);
  };

  const updateTeacherRoles = async (teacherId, roles) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/teachers/${teacherId}/roles`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roles }),
      });
      
      if (res.ok) {
        fetchTeachers(); // Refresh the list
        alert('Teacher roles updated successfully');
      }
    } catch (error) {
      console.error('Error updating roles:', error);
      alert('Error updating teacher roles');
    }
  };

  const handleRoleChange = (teacherId, roleName, value) => {
    const teacher = teachers.find(t => t._id === teacherId);
    const updatedRoles = { ...teacher.roles, [roleName]: value };
    updateTeacherRoles(teacherId, updatedRoles);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <h2>Teacher Role Management</h2>
      
      {teachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: 10, border: '1px solid #ddd' }}>Teacher Name</th>
              <th style={{ padding: 10, border: '1px solid #ddd' }}>Username</th>
              <th style={{ padding: 10, border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: 10, border: '1px solid #ddd' }}>HOD</th>
              <th style={{ padding: 10, border: '1px solid #ddd' }}>Class Coordinator</th>
              <th style={{ padding: 10, border: '1px solid #ddd' }}>Subject Teacher</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(teacher => (
              <tr key={teacher._id}>
                <td style={{ padding: 10, border: '1px solid #ddd' }}>
                  {teacher.userId.fullName}
                </td>
                <td style={{ padding: 10, border: '1px solid #ddd' }}>
                  {teacher.userId.username}
                </td>
                <td style={{ padding: 10, border: '1px solid #ddd' }}>
                  {teacher.userId.email}
                </td>
                <td style={{ padding: 10, border: '1px solid #ddd', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={teacher.roles.isHOD}
                    onChange={(e) => handleRoleChange(teacher._id, 'isHOD', e.target.checked)}
                  />
                </td>
                <td style={{ padding: 10, border: '1px solid #ddd', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={teacher.roles.isClassCoordinator}
                    onChange={(e) => handleRoleChange(teacher._id, 'isClassCoordinator', e.target.checked)}
                  />
                </td>
                <td style={{ padding: 10, border: '1px solid #ddd', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    checked={teacher.roles.isSubjectTeacher}
                    onChange={(e) => handleRoleChange(teacher._id, 'isSubjectTeacher', e.target.checked)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
