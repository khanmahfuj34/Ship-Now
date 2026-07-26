"use client";

import React, { useState } from "react";
import MobileHeader from "./MobileHeader";
import MobileSidebar from "./MobileSidebar";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <MobileHeader onToggle={toggleDrawer} />
      <MobileSidebar isOpen={isOpen} onClose={closeDrawer} />
    </>
  );
}
