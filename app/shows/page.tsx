import React, { useEffect, useRef } from 'react';
import BandsintownWidget from '../../components/BandsinTown';
import ShowHero from '@/components/ShowHero'

const page = () => {
  return (
    <div>
      <ShowHero />
      <BandsintownWidget />
    </div>
  )
}

export default page
