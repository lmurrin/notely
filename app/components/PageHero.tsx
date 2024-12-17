import Link from "next/link";

export default function PageHero({ title, content }: any) {
  return (
    <div className="hero bg-primary min-h-80">
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="py-6">{content ? content : ""}</p>
          <Link href="/add-note">
            <button className="btn btn-secondary">Add note</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
