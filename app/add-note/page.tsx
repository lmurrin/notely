"use client";
import React, { useState } from "react";
import PocketBase from "pocketbase";
import PageHero from "../components/PageHero";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [owner, setOwner] = useState("40mducwk4dp321f"); // Update with actual owner logic if needed
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleAddNote() {
    setLoading(true);
    setMessage("");

    try {
      const pb = new PocketBase("http://127.0.0.1:8090");
      const data = {
        title,
        content,
        owner,
      };

      const record = await pb.collection("notes").create(data);
      setMessage("Note added successfully!");
      console.log("New note:", record);

      // Clear the form
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding note:", error);
      setMessage("Failed to add note. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero title="Add note" />
      <div className="my-10 flex justify-center">
        <div className="w-4/12 flex flex-col gap-3">
          <label for="title" className="text-sm text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="input input-bordered w-full"
          />
          <label for="content" className="text-sm text-gray-600">
            Content
          </label>
          <textarea
            value={content}
            id="content"
            onChange={(e) => setContent(e.target.value)}
            className="textarea textarea-bordered"
            placeholder="Note"
          ></textarea>
          <button
            onClick={handleAddNote}
            className={`btn btn-primary ${loading ? "loading" : ""}`}
            disabled={loading || !title || !content}
          >
            Add note
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}
