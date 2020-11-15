import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <div>LandingPage</div>
      <Link to='/document'>Go to Document Page</Link>
    </>
  );
}
