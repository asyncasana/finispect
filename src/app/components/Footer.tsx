type FooterProps = {
  year: number;
};

export default function Footer({ year }: FooterProps) {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 mt-8">
      &copy; {year} Finispect Ltd. All rights reserved.<br />
      Serving Greater London &amp; the South East
    </footer>
  );
}