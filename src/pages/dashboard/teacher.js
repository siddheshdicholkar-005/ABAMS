import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function TeacherDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.loginRole === 'teacher') {
        setUser(parsedUser);
      } else {
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Subject Teacher Dashboard</h1>
      <p>Welcome, {user.fullName}!</p>
    </div>
  );
}
