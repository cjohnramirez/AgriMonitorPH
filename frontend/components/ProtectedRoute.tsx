'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    // Basic "Static" Auth check
    const isAuthorized = localStorage.getItem('agri_auth_token') === 'verified_user';
    if (!isAuthorized) {
      toast.error('Unauthorized access. Please log in to continue.');
      router.push('/'); // Redirect to home if not "logged in"
    }
  }, [router]);

  return <>{children}</>;
}