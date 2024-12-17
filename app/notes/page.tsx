import Link from "next/link";
import PageHero from "../components/PageHero";
import { format, formatDistanceToNow } from "date-fns";

async function getNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=10"
  );
  const data = await response.json();
  return data?.items as any[];
}

export default async function Notes() {
  const notes = await getNotes();

  return (
    <>
      <PageHero title="Your notes" />
      <div className="container w-10/12 mx-auto py-6">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Create</th>
                <th>Modified</th>
              </tr>
            </thead>
            <tbody>
              {notes?.map((note) => {
                return <Note key={note.id} note={note} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Note({ note }: any) {
  const {id, title, content, created, updated} = note || {}:
  return (
    <tr>
       <th><Link href={`/notes/${id}`}>{title}</Link></th>
      <td>{content}</td>
      <td>{formatDate(created)}</td>
      <td>{formatDate(updated)}</td>
    </tr>

  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  return date > oneMonthAgo
    ? formatDistanceToNow(date, { addSuffix: true })
    : format(date, "dd/MM/yyyy 'at' HH:mm");
}
