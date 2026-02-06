import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../firebase/auth';
import { seedFirestore } from '../utils/seedFirestore';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';
import {
  User,
  Briefcase,
  Code,
  FolderGit2,
  MessageSquare,
  LogOut,
  Database
} from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [seeding, setSeeding] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: 'Logged out successfully',
      });
      navigate('/admin/login');
    } catch (error) {
      toast({
        title: 'Error logging out',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  const handleSeedDatabase = async () => {
    setSeeding(true);
    try {
      await seedFirestore();
      toast({
        title: 'Database seeded successfully!',
        description: 'All mock data has been added to Firestore.',
      });
    } catch (error) {
      toast({
        title: 'Error seeding database',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setSeeding(false);
    }
  };

  const menuItems = [
    { icon: User, label: 'Profile Management', path: '/admin/profile', description: 'Edit personal info and social links' },
    { icon: Code, label: 'Skills Management', path: '/admin/skills', description: 'Add or update technical skills' },
    { icon: FolderGit2, label: 'Projects Management', path: '/admin/projects', description: 'Manage portfolio projects' },
    { icon: Briefcase, label: 'Experience Management', path: '/admin/experience', description: 'Update work experience' },
    { icon: MessageSquare, label: 'Contact Messages', path: '/admin/messages', description: 'View contact form submissions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#111111] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-[#71717a]">Welcome back, {user?.email}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-[#27272a] bg-transparent hover:bg-[#27272a] text-white gap-2"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        {/* Seed Database Card */}
        <Card className="p-6 bg-[#1a1a1a] border-[#27272a] mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Database size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Initialize Database</h3>
                <p className="text-[#71717a] text-sm">Seed Firestore with initial portfolio data</p>
              </div>
            </div>
            <Button
              onClick={handleSeedDatabase}
              disabled={seeding}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {seeding ? 'Seeding...' : 'Seed Database'}
            </Button>
          </div>
        </Card>

        {/* Management Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1a1a1a] border-[#27272a] hover:border-blue-500/50 transition-all cursor-pointer group"
              onClick={() => navigate(item.path)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <item.icon size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-[#71717a] text-sm">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-[#1a1a1a] border-[#27272a] text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">--</div>
            <div className="text-[#71717a] text-sm">Total Projects</div>
          </Card>
          <Card className="p-4 bg-[#1a1a1a] border-[#27272a] text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">--</div>
            <div className="text-[#71717a] text-sm">Skills Listed</div>
          </Card>
          <Card className="p-4 bg-[#1a1a1a] border-[#27272a] text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">--</div>
            <div className="text-[#71717a] text-sm">Messages</div>
          </Card>
          <Card className="p-4 bg-[#1a1a1a] border-[#27272a] text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">--</div>
            <div className="text-[#71717a] text-sm">Years Experience</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
