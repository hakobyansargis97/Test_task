'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => router.replace('/'));
  return <></>;
};

export default NotFound;
