type FooterProps = {
  year: number;
};

export default function Footer({ year }: FooterProps) {
  return (
    <footer className="bg-white text-center text-gray-500 text-sm py-6 mt-8">
      &copy; {year} Finispect is a trading name of Qualitube Ltd. All rights reserved.<br />
      Serving Greater London &amp; the South East.<br />
      Made with ❤️ by{" "}
      <a
        href="https://pixelmyst.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        PixelMyst Studio
      </a>
    </footer>
  );
}