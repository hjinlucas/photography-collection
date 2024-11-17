export default function Footer() {
  return (
    <footer>
      <div className="max-w-screen-xl py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center mx-auto">
          <div>
            <p className="font-signika">
              <b>LUCAS JIN</b>
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Nomad, lived in US (ME, NY, CA, GA), CN.
              <br />
              Email: lucasjin.work@gmail.com
            </p>
            {/* ... (social media links) */}
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
          Inspired by João Franco. Re-build using Next.js & Typescript
        </p>
      </div>
    </footer>
  );
}
