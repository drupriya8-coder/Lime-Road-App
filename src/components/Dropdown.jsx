import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Menu
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>

      {open && (
        <div className="absolute index right-0 mt-2 w-48 bg-white border rounded shadow-lg">

          <Link
            to="/userprofile"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </Link>

          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/signup"
            className="block px-4 py-2 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            SignUp
          </Link>

          <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
            Logout
          </a>

        </div>
      )}
    </div>
  );
}
