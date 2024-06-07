/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Z37PGNhPiQ3
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function PlaylistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Festival Playlist</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Performing Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4" />
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Schedule Clashes</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4" />
      </div>
    </div>
  )
}