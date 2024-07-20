import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="h-10 ml-5" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:bg-green-700 p-2 rounded">
              Home page
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:bg-green-700 p-2 rounded">
              Events
            </Link>
          </li>
        </ul>
      </nav>
      <div className="user-actions flex space-x-4 mr-5">
        <a href="#" className="hover:bg-green-700 p-2 rounded">
          Login
        </a>
        <Link href="/create" className="hover:bg-green-700 p-2 rounded">
          Create hackathon
        </Link>
      </div>
    </header>
  );
}
