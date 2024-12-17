import { formatDate } from "../page";

async function getNote(noteId: string) {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div className="container flex justify-center  mx-auto py-6">
      <div className="card bg-base-100 w-screen border-2">
        <div className="card-body">
          <h2 className="card-title">{note.title}</h2>
          <p>{note.content}</p>
          <div className="divider"></div>
          <div className="text-sm text-slate-400 flex justify-between">
            <span>Created: {formatDate(note.created)}</span>
            <span>Modified: {formatDate(note.updated)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
