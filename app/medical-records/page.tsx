
"use client";

import { useState } from "react";
import UploadRecordModal from "@/components/medical-records/UploadRecordModal";

export default function MedicalRecordsPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Medical Records
          </h1>

          <p className="mt-2 text-slate-400">
            Securely store and manage your health documents.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
        >
          + Upload Medical Record
        </button>

      </div>

      {/* Empty State */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center">

        <h2 className="text-xl font-semibold text-white">
          No Medical Records Yet
        </h2>

        <p className="mt-3 text-slate-400">
          Upload your first medical report, prescription, X-ray, or lab report.
        </p>

      </div>

      {/* Upload Modal */}
      <UploadRecordModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
}