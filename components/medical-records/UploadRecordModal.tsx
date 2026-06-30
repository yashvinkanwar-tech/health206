"use client";

import { useState } from "react";
import { X, Upload } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface UploadRecordModalProps {
  open: boolean;
  onClose: () => void;
}

export default function UploadRecordModal({
  open,
  onClose,
}: UploadRecordModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("other");
  const [description, setDescription] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleUpload() {
    setError("");
    setSuccess("");

    if (!title.trim()) {
      setError("Please enter a title.");
      return;
    }

    if (!file) {
      setError("Please choose a file.");
      return;
    }

    setLoading(true);

    try {
      // Upload logic will be added next
      console.log({
        title,
        category,
        description,
        file,
      });

      setSuccess(
        "Ready! Backend upload will be connected in the next step."
      );
    } catch (err) {
      setError("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-6">

          <h2 className="text-2xl font-bold text-white">
            Upload Medical Record
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-800"
          >
            <X size={20} className="text-slate-400" />
          </button>

        </div>

        {/* Body */}
        <div className="space-y-5 p-6">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Record Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blood Test Report"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            >
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional notes..."
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Upload File
            </label>

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => {
                if (e.target.files?.length) {
                  setFile(e.target.files[0]);
                }
              }}
              className="w-full rounded-xl border border-dashed border-cyan-500 bg-slate-800 p-4 text-white"
            />

            {file && (
              <p className="mt-2 text-sm text-cyan-400">
                Selected: {file.name}
              </p>
            )}
          </div>

          {error && (
            <p className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </p>
          )}

          {success && (
            <p className="rounded-lg bg-green-500/10 p-3 text-sm text-green-400">
              {success}
            </p>
          )}

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-slate-800 p-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-6 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleUpload}
            disabled={loading}
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-400 disabled:opacity-50"
          >
            <Upload size={18} />

            {loading ? "Uploading..." : "Upload Record"}
          </button>

        </div>

      </div>

    </div>
  );
}