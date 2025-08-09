import RegisterForm from '../components/RegisterForm';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(false);

  function handleRegister(data) {
    setSuccess(true);
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }

  if (success) {
    return (
      <div style={{ 
        display: 'flex', 
        minHeight: '100vh', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{ color: 'green' }}>Registration Successful!</h2>
        <p>Redirecting to login page...</p>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <RegisterForm onRegister={handleRegister} />
      <p style={{ marginTop: 20 }}>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}
