"use client";

import { useState } from "react";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactModal from "@/components/ContactModal";

export default function LawFirmClientWrapper() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <PageLoader />
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
