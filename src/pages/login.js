import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(data) {
    const { user } = data;
    
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    
    // Redirect based on login role
    switch (user.loginRole) {
      case 'admin':
        router.push('/dashboard/admin');
        break;
      case 'student':
        router.push('/dashboard/student');
        break;
      case 'parent':
        router.push('/dashboard/parent');
        break;
      case 'teacher':
        router.push('/dashboard/teacher');
        break;
      case 'coordinator':
        router.push('/dashboard/coordinator');
        break;
      case 'hod':
        router.push('/dashboard/hod');
        break;
      default:
        router.push('/');
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <LoginForm onLogin={handleLogin} />
      <p style={{ marginTop: 20 }}>
        Don't have an account?{' '}
        <a href="/register" style={{ color: 'blue', textDecoration: 'underline' }}>
          Register here
        </a>
      </p>
    </div>
  );
}
