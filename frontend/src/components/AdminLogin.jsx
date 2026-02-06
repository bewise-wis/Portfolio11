import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail } from '../firebase/auth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { Lock, Mail } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginWithEmail(email, password);
      toast({
        title: 'Login successful!',
        description: 'Welcome to the admin dashboard.',
      });
      navigate('/admin/dashboard');
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message || 'Invalid credentials. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0a0a0a] to-[#111111]">
      <Card className="w-full max-w-md p-8 bg-[#1a1a1a] border-[#27272a]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4">
            <Lock size={32} className="text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-[#71717a]">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-white text-sm font-medium flex items-center gap-2">
              <Mail size={16} />
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="bg-[#0a0a0a] border-[#27272a] text-white placeholder:text-[#71717a] focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-white text-sm font-medium flex items-center gap-2">
              <Lock size={16} />
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="bg-[#0a0a0a] border-[#27272a] text-white placeholder:text-[#71717a] focus:border-blue-500"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base font-medium"
          >
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-[#71717a] hover:text-white transition-colors text-sm"
          >
            ← Back to website
          </button>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
