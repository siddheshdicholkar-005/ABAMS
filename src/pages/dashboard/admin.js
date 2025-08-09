import DashboardLayout from '../../components/DashboardLayout';
import AdminDashboard from '../../components/AdminDashboard';

export default function AdminDashboardPage() {
  return (
    <DashboardLayout requiredRole="admin">
      <AdminDashboard />
    </DashboardLayout>
  );
}
