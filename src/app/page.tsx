export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-[var(--bg)] text-[var(--text)]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Finispect</h1>
      <p className="text-lg mb-4 max-w-xl text-center">
        Professional snagging inspections across London & the South East.
      </p>
      <a
        href="#contact"
        className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold py-3 px-6 rounded-md transition-colors"
      >
        Book Your Inspection
      </a>
    </main>
  );
}