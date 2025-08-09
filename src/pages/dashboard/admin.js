import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AdminDashboard from '../../components/AdminDashboard';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.loginRole === 'admin') {
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
    <div>
      <AdminDashboard />
    </div>
  );
}
