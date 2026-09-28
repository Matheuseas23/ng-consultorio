import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfileSection from '@/components/ProfileSection';
import ServicesSection from '@/components/ServicesSection';
import CameraScrollSection from '@/components/CameraScrollSection';
import CaregiversPillar from '@/components/CaregiversPillar';
import InstagramSection from '@/components/InstagramSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ivory-page text-slate-800">
      <Navbar />
      <Hero />
      <ProfileSection />
      <ServicesSection />
      <CameraScrollSection />
      <CaregiversPillar />
      <InstagramSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
