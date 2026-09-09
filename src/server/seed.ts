/**
 * First-run seed data.
 *
 * These rows used to live at the bottom of `schema.sql`. A Clawnify deploy
 * applies that file as DDL only — a single INSERT fails the whole deploy — so
 * they are inserted by the app instead, on the first request that reaches it.
 * See `ensureSeeded` in `index.ts`.
 */

export interface SeedOperatory {
  name: string;
  color: string;
  sort_order: number;
}

export interface SeedPractitioner {
  name: string;
  role: string;
  color: string;
}

export interface SeedTreatmentType {
  code: string;
  name: string;
  duration_minutes: number;
  default_fee: number;
  color: string;
}

/**
 * Practice defaults: the day starts 07:00 and ends 19:00, in minutes from
 * midnight. These three keys drive the agenda grid, so every read of
 * `settings` falls back to them — the calendar renders correctly even on the
 * very first request, before the seed has run.
 */
export const DEFAULT_SETTINGS: Record<string, string> = {
  day_start_minute: "420",
  day_end_minute: "1140",
  slot_minutes: "15",
};

export const SEED_OPERATORIES: SeedOperatory[] = [
  { name: "Op 1", color: "sky", sort_order: 0 },
  { name: "Op 2", color: "emerald", sort_order: 1 },
  { name: "Op 3", color: "amber", sort_order: 2 },
];

export const SEED_PRACTITIONERS: SeedPractitioner[] = [
  { name: "Dr. Lee", role: "dentist", color: "teal" },
  { name: "Dr. Patel", role: "dentist", color: "violet" },
  { name: "Sarah Kim", role: "hygienist", color: "rose" },
];

export const SEED_TREATMENT_TYPES: SeedTreatmentType[] = [
  { code: "EXAM", name: "Exam & Cleaning", duration_minutes: 30, default_fee: 120, color: "sky" },
  { code: "FILL", name: "Restoration / Filling", duration_minutes: 45, default_fee: 220, color: "amber" },
  { code: "CROWN", name: "Crown", duration_minutes: 90, default_fee: 1100, color: "violet" },
  { code: "ENDO", name: "Root Canal", duration_minutes: 90, default_fee: 950, color: "rose" },
  { code: "EXT", name: "Extraction", duration_minutes: 30, default_fee: 250, color: "orange" },
  { code: "CONS", name: "Consultation", duration_minutes: 20, default_fee: 80, color: "emerald" },
];
