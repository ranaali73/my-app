import Link from 'next/link'
import React from "react";
import Navbar from "./Navbar/page";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', margin: '20px 0', color: '#333' }}>This is the Home Page</h1>

    </div>
  );
}
