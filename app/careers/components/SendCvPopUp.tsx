// import React from "react";
// interface CvPopupProps {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
// }

// function SendCvPopUp({ isOpen, setIsOpen }: CvPopupProps) {
//   return <div></div>;
// }

// export default SendCvPopUp;

"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface CvUploadPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SendCvPopUp = ({ isOpen, setIsOpen }: CvUploadPopupProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset state when closed
  useEffect(() => {
    if (!isOpen) {
      setFile(null);
      setError("");
      setIsUploading(false);
    }
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  const handleFileValidation = (selectedFile: File) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Only PDF or Word documents are allowed.");
      setFile(null);
      return false;
    }
    if (selectedFile.size > maxSize) {
      setError("File size must be less than 5MB.");
      setFile(null);
      return false;
    }

    setError("");
    setFile(selectedFile);
    return true;
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileValidation(e.target.files[0]);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileValidation(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file first");
      return;
    }
    setIsUploading(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsUploading(false);
      alert("CV Uploaded Successfully!");
      closeModal();
    }, 1500);
  };

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      {/* Background Overlay with Blur */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
        onClick={closeModal}
      ></div>

      {/* Content Section Card - Matched to your Contact style */}
      <div
        style={{
          backgroundColor: "var(--color-bg-alt)",
          maxWidth: "550px",
        }}
        className={`relative w-full rounded-[1rem] shadow-2xl overflow-hidden border border-[var(--color-border)] transition-transform duration-500 ease-out ${
          isOpen ? "translate-y-0 scale-100" : "translate-y-20 scale-95"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-8 right-8 p-3 rounded-full hover:bg-slate-100 transition-all active:scale-90"
        >
          <X className="w-6 h-6 text-slate-400" />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-10 text-center lg:text-left">
            <h3
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-display)",
              }}
              className="text-4xl font-black tracking-tight"
            >
              Upload <span style={{ color: "var(--color-secondary)" }}>CV</span>
            </h3>
            <p
              style={{ color: "var(--color-text-muted)" }}
              className="text-base mt-3 font-medium"
            >
              Apply now by sharing your latest professional resume.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleUpload}>
            {/* Drag & Drop Area */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                Resume File
              </label>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative group border-2 border-dashed p-10 transition-all cursor-pointer flex flex-col items-center justify-center text-center rounded-xl ${
                  file
                    ? "border-green-400 bg-green-50/30"
                    : error
                      ? "border-red-400 bg-red-50/30"
                      : "border-[var(--color-border)] hover:border-[var(--color-secondary)] bg-slate-50/50"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={onFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />

                {file ? (
                  <>
                    <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                    <p className="text-[var(--color-text)] font-bold text-lg truncate w-full px-4">
                      {file.name}
                    </p>
                    <p className="text-green-600 text-xs font-bold uppercase mt-1">
                      Ready to Submit
                    </p>
                  </>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-slate-300 group-hover:text-[var(--color-secondary)] mb-4 transition-colors" />
                    <p className="text-[var(--color-text)] font-bold">
                      Click to browse or drag CV here
                    </p>
                    <p className="text-slate-400 text-xs mt-2 font-medium">
                      PDF, DOCX (Max 5MB)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border-l-4 border-red-500">
                <AlertCircle size={16} className="text-red-500" />
                <p className="text-red-700 text-xs font-bold">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isUploading}
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
              }}
              className="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-70 text-lg uppercase tracking-wide"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  Submit Application <FileText className="w-5 h-5" />
                </>
              )}
            </button>

            {file && !isUploading && (
              <button
                type="button"
                onClick={() => setFile(null)}
                className="w-full text-center text-slate-400 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Remove selected file
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendCvPopUp;
