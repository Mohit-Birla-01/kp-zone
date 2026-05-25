import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import FloatingWhatsAppEnquiry from "@/components/HostelEnquiryButton";
import Navbar from "@/components/Navbar";

import Home from "@/pages/Home";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <main className="flex-1">
        <Home />
      </main>

      <div className="fixed bottom-6 right-6 z-50">
        <FloatingWhatsAppEnquiry />
      </div>

      <Footer />
    </div>
  );
}