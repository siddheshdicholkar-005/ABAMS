import { useState } from 'react';

export default function RegisterForm({ onRegister }) {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    mobileNumber: '',
    userType: 'student'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        onRegister(data);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Server error. Try again.');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ 
      maxWidth: 400, 
      margin: 'auto', 
      padding: 20, 
      border: '1px solid #ccc',
      borderRadius: 8 
    }}>
      <h2>Register for ABAMS</h2>
      
      <input
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      
      <input
        name="mobileNumber"
        placeholder="Mobile Number"
        value={form.mobileNumber}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      
      <select
        name="userType"
        value={form.userType}
        onChange={handleChange}
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      >
        <option value="student">Student</option>
        <option value="parent">Parent</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
      
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      
      <button type="submit" disabled={loading} style={{ 
        width: '100%', 
        padding: 10,
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: 4
      }}>
        {loading ? "Registering..." : "Register"}
      </button>
      
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
    </form>
  );
}
