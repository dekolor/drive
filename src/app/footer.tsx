import Link from "next/link";

export function Footer() {
  return (
    <div className="h-16 bg-gray-100 mt-12 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div>Drive</div>

        <Link className="text-blue-400 hover:text-blue-500" href="/privacy">
          Privacy Policy
        </Link>
        <Link
          className="text-blue-400 hover:text-blue-500"
          href="/terms-of-service"
        >
          Terms of service
        </Link>
        <Link className="text-blue-400 hover:text-blue-500" href="/about">
          About
        </Link>
      </div>
    </div>
  );
}
