import { useState } from 'react';

export default function LoginForm({ onLogin }) {
  const [form, setForm] = useState({
    userId: '',
    password: '',
    userType: 'student',
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

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        onLogin(data);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Try again.');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: 'auto', padding: 20, border: '1px solid #ccc' }}>
      <h2>Login to ABAMS</h2>
      <input
        name="userId"
        placeholder="Username"
        value={form.userId}
        onChange={handleChange}
        required
        style={{ width: '100%', marginBottom: 10, padding: 8 }}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
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
        <option value="teacher">Subject Teacher</option>
        <option value="coordinator">Class Coordinator</option>
        <option value="hod">HOD</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
    </form>
  );
}
