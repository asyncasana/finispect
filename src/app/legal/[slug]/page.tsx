import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface LegalPageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const data = await client.fetch(
    `*[_type == "legalPage" && slug.current == $slug][0]{
      title,
      content
    }`,
    { slug }
  );

  if (!data) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Homepage
      </Link>
      <h1 className="text-2xl font-bold mb-6 text-blue-900">{data.title}</h1>
      <div className="prose prose-blue max-w-none">
        <PortableText value={data.content} />
      </div>
    </main>
  );
}
