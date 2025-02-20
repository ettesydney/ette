
'use client';

import { useAtom } from 'jotai';
import { siteInformation } from '@/store/siteInformation';

export default function Footer() {
  const [siteData] = useAtom(siteInformation);

  console.log('***', siteData, '***')

  return (
    <footer className="bottom-0 w-full z-10 p-4">
      <div className="grid grid-cols-12 items-center gap-4">
        {/* Project Inquiries */}
       FOOTER
      </div>
    </footer>
  );
}
