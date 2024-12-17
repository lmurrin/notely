import Link from "next/link";

export default function HomepageHero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Note-ly</h1>
          <p className="py-6">
            Quick and simple note taking app. For those looking for a
            straightforward solution to their note-taking needs.
          </p>
          <Link href="/notes" className="btn btn-primary">
            Your notes
          </Link>
        </div>
      </div>
    </div>
  );
}
