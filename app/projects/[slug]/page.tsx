"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { getProjectDetail, type Locale } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function parseLocale(value: string | string[] | undefined): Locale {
  const normalized = Array.isArray(value) ? value[0] : value;
  return normalized === "sr" ? "sr" : "en";
}

export default function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { slug } = use(params);
  const query = use(searchParams);
  const locale = parseLocale(query.lang);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const project = getProjectDetail(locale, slug);

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-4 py-20 sm:px-6 lg:px-10">
        <div className="card-surface w-full rounded-[2rem] p-8">
          <p className="section-kicker">Project</p>
          <h1 className="section-title mt-4 max-w-2xl">
            {locale === "sr" ? "Projekat nije pronadjen." : "Project not found."}
          </h1>
          <Link
            href={`/?lang=${locale}`}
            className="button-secondary mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold"
          >
            {locale === "sr" ? "Nazad na pocetnu" : "Back to homepage"}
          </Link>
        </div>
      </main>
    );
  }

  const galleryCount = project.galleryImages.length;
  const safeActiveImageIndex =
    galleryCount > 0 ? ((activeImageIndex % galleryCount) + galleryCount) % galleryCount : 0;
  const activeImageSrc = project.galleryImages[safeActiveImageIndex];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-8rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(199,162,125,0.24),_transparent_65%)]" />
        <div className="absolute right-[-10rem] top-16 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(72,94,81,0.14),_transparent_70%)]" />
      </div>

      <section className="mx-auto flex w-full max-w-[1600px] flex-col px-4 pb-20 pt-6 sm:px-6 lg:px-10 2xl:px-12">
        <header className="sticky top-0 z-30 -mx-4 mb-6 border-b border-black/8 bg-[rgba(246,241,234,0.78)] px-4 py-5 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 2xl:-mx-12 2xl:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                Milan Milojevic Architecture
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{project.title}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/?lang=${locale}#projects`}
                className="button-secondary rounded-full px-5 py-3 text-sm font-semibold"
              >
                {project.backLabel}
              </Link>
              <Link
                href={
                  locale === "sr"
                    ? `/projects/${project.slug}?lang=en`
                    : `/projects/${project.slug}?lang=sr`
                }
                className="button-secondary rounded-full px-4 py-3 text-sm font-semibold"
              >
                {locale === "sr" ? "English" : "Srpski"}
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="section-kicker">{project.eyebrow}</p>
            <h1 className="section-title mt-4 max-w-4xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-[1.04rem] leading-7 text-stone-650">
              {project.heroText}
            </p>
          </div>

          <div className="card-surface rounded-[2rem] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.details.map((item) => (
                <div
                  key={`${project.slug}-${item.label}`}
                  className="rounded-[1.35rem] border border-white/60 bg-white/50 px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider grid gap-8 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10 lg:py-18">
          <div className="card-surface overflow-hidden rounded-[2.1rem] p-4 sm:p-5">
            <div className="grid gap-4">
              <a
                href={activeImageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="card-media relative block min-h-[300px] overflow-hidden rounded-[1.6rem] lg:min-h-[560px]"
              >
                <Image
                  src={activeImageSrc}
                  alt={`${project.title} image ${safeActiveImageIndex + 1}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </a>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveImageIndex((prev) => prev - 1)}
                  className="button-secondary rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {locale === "sr" ? "Prethodna" : "Previous"}
                </button>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  {safeActiveImageIndex + 1} / {galleryCount}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex((prev) => prev + 1)}
                  className="button-secondary rounded-full px-4 py-2 text-sm font-semibold"
                >
                  {locale === "sr" ? "Sledeca" : "Next"}
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
                {project.galleryImages.map((imageSrc, index) => {
                  const isActive = index === safeActiveImageIndex;
                  return (
                    <button
                      key={`${project.slug}-thumb-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative min-h-[72px] overflow-hidden rounded-xl border ${
                        isActive ? "border-stone-900" : "border-white/70"
                      }`}
                      aria-label={`${locale === "sr" ? "Prikazi sliku" : "Show image"} ${index + 1}`}
                    >
                      <Image
                        src={imageSrc}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="card-surface rounded-[1.9rem] p-5 sm:p-6">
              <p className="section-kicker">{project.overviewTitle}</p>
              <p className="mt-5 text-[1rem] leading-7 text-stone-650">{project.overviewText}</p>
            </div>

            <div className="card-surface rounded-[1.9rem] p-5 sm:p-6">
              <p className="section-kicker">{project.highlightsTitle}</p>
              <div className="mt-5 grid gap-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={`${project.slug}-${highlight}`}
                    className="rounded-[1.25rem] border border-white/60 bg-white/50 px-4 py-3 text-sm leading-6 text-stone-700"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface rounded-[1.9rem] p-5 text-sm leading-6 text-stone-650 sm:p-6">
              {project.galleryNote}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
