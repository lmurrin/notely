import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            note-ly
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Notes</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href="/notes">View Notes</Link>
                  </li>
                  <li>
                    <Link href="/add-note">Add Note</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
