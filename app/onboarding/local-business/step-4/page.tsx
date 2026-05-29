"use client";

import Link from "next/link";
import { useState } from "react";
import { Upload } from "lucide-react";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { SellerLivePreview } from "@/components/onboarding/SellerLivePreview";

const UPLOADS = [
  {
    key: "logo",
    kicker: "Logo / Icon",
    title: "Business Logo or Icon",
    description: "Upload a square or horizontal logo. A clean mark helps your local business page look professional. 1:1",
    button: "Upload Logo",
    required: true,
    multiple: false,
  },
  {
    key: "banner",
    kicker: "Banner",
    title: "Banner Photo",
    description: "A wide cover photo for the top of your local business page that shows your service, team or location. 16:9",
    button: "Upload Photo",
    required: true,
    multiple: false,
  },
  {
    key: "pictures",
    kicker: "Pictures",
    title: "Service Pictures",
    description: "Add up to 5 photos of your services, work samples or business location. 16:9",
    button: "Add Photos",
    required: false,
    multiple: true,
  },
  {
    key: "founder",
    kicker: "Founder",
    title: "Founder Profile Picture",
    description: "Upload a professional headshot so parishioners can recognize the person behind the business. 1:1",
    button: "Upload Headshot",
    required: false,
    multiple: false,
  },
] as const;

type UploadKey = typeof UPLOADS[number]["key"];
type UploadState = Record<UploadKey, string[]>;

function MediaUploadCard({
  item,
  files,
  onUpload,
}: {
  item: typeof UPLOADS[number];
  files: string[];
  onUpload: (key: UploadKey, files: FileList | null, multiple: boolean) => void;
}) {
  return (
    <article className="min-h-[170px] rounded-[18px] border border-pm-border bg-white p-5 shadow-pm-soft">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-pm-muted">
          {item.kicker}
        </p>
        <span
          className={[
            "rounded-full px-2.5 py-1 text-[10px] font-extrabold",
            item.required ? "bg-pm-blue/10 text-pm-blue" : "bg-pm-soft text-pm-muted",
          ].join(" ")}
        >
          {item.required ? "Required" : "Optional"}
        </span>
      </div>

      <h3 className="text-base font-extrabold text-pm-navy">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-pm-muted">{item.description}</p>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.slice(0, 6).map((src, index) => (
            <img
              key={`${item.key}-${index}`}
              src={src}
              alt={`${item.title} ${index + 1}`}
              className="h-12 w-12 rounded-xl object-cover ring-1 ring-pm-border"
            />
          ))}
        </div>
      )}

      <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-pm-border bg-white px-4 py-2 text-sm font-extrabold text-pm-blue shadow-sm transition hover:border-pm-blue hover:bg-pm-soft">
        <Upload className="h-4 w-4" aria-hidden />
        {item.button}
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/svg+xml"
          multiple={item.multiple}
          className="sr-only"
          onChange={(e) => {
            onUpload(item.key, e.target.files, item.multiple);
            e.currentTarget.value = "";
          }}
        />
      </label>
    </article>
  );
}

export default function LocalBizStep4() {
  const [uploads, setUploads] = useState<UploadState>({ logo: [], banner: [], pictures: [], founder: [] });

  async function handleUpload(key: UploadKey, fileList: FileList | null, multiple: boolean) {
    if (!fileList?.length) return;
    const files = Array.from(fileList).slice(0, multiple ? 6 : 1);
    const previews = await Promise.all(files.map(readFileAsDataUrl));
    setUploads((current) => ({
      ...current,
      [key]: multiple ? [...current[key], ...previews].slice(0, 6) : previews,
    }));
  }

  return (
    <SellerStepShell
      step={4}
      eyebrow="Step 4 of 5 · Media, Trust & Preview"
      title={
        <>
          Add the visual{" "}
          <span className="pm-gradient-text">trust elements</span> people
          look for.
        </>
      }
      description="Upload your logo, banner and photos. The public page preview updates as the business completes the fields."
      preview={<SellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">
            AI
          </span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">
              ParishMart Concierge
            </p>
            <p className="mt-1 text-sm text-pm-muted">
              Logo, banner and service photos transform a directory listing into a
              trusted local business page.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {UPLOADS.map((item) => (
            <MediaUploadCard
              key={item.key}
              item={item}
              files={uploads[item.key]}
              onUpload={handleUpload}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/local-business/step-3" className="pm-btn pm-btn-secondary">
            Back
          </Link>
          <Link
            href="/onboarding/local-business/step-5"
            className="pm-btn pm-btn-primary"
          >
            Continue to Membership
          </Link>
        </div>
      </div>
    </SellerStepShell>
  );
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
