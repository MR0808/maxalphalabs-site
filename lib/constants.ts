export const SITE_NAME = "Max Alpha Labs";
export const SITE_URL = "https://maxalphalabs.com";
export const SITE_DESCRIPTION =
  "Max Alpha Labs is a founder-led startup studio building practical software companies across compliance, finance, productivity and operations.";
export const CONTACT_EMAIL = "hello@maxalphalabs.com";

export const NAV_LINKS = [
  { href: "/companies", label: "Companies" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const STUDIO_TIMELINE = [
  { step: "Discover", description: "Find overlooked problems worth solving." },
  { step: "Validate", description: "Test assumptions before overbuilding." },
  { step: "Build", description: "Ship focused products with lean teams." },
  { step: "Launch", description: "Get real users and real feedback fast." },
  { step: "Grow", description: "Improve what works and cut what doesn't." },
  { step: "Scale", description: "Expand proven products with discipline." },
] as const;

export const PHILOSOPHY_PILLARS = [
  {
    title: "Solve real problems",
    description:
      "We focus on practical pain points that people and businesses actually face every day.",
  },
  {
    title: "Build efficiently",
    description:
      "Small teams, sharp scope and modern tooling let us move from idea to product without waste.",
  },
  {
    title: "Own the outcome",
    description:
      "We stay involved beyond launch because accountability matters more than handoffs.",
  },
] as const;

export const CREDIBILITY_ITEMS = [
  "Founded by operators.",
  "Built by founders.",
  "Backed by execution.",
] as const;

import { companies } from "./companies";

export const PEOPLE = [
  {
    name: "Mark Rosenberg",
    bio: "Mark Rosenberg is an MBA-qualified technology and product leader with experience across SaaS, finance, logistics, retail, education and government. He has managed technical teams, founded and raised capital for a startup, and built products across multiple industries.",
  },
  {
    name: "Itai Etzman",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
] as const;

export function getStats() {
  return [
    { label: "Products", value: String(companies.length) },
    { label: "Years Experience", value: "20+" },
    { label: "Industries", value: "Multiple" },
    { label: "Based In", value: "Australia" },
  ] as const;
}

export const APPROACH_SECTIONS = [
  {
    title: "We find overlooked problems",
    description:
      "Not every opportunity needs a pitch deck. We look for friction in everyday workflows, compliance gaps and tools that should exist but don't.",
  },
  {
    title: "We validate before overbuilding",
    description:
      "Prototypes, conversations and small experiments come first. We want evidence before we invest months in the wrong direction.",
  },
  {
    title: "We use AI-assisted development to move faster",
    description:
      "Modern AI tooling accelerates research, prototyping and implementation so we can test more ideas with less overhead.",
  },
  {
    title: "We launch lean",
    description:
      "First versions are narrow and useful. We ship to learn, not to impress, and we improve based on what users actually do.",
  },
  {
    title: "We keep ownership of outcomes",
    description:
      "We build products we believe in and stay accountable for whether they work in the real world.",
  },
  {
    title: "We scale what works",
    description:
      "When a product earns traction, we invest in growth, reliability and the team needed to support it.",
  },
] as const;

export const VALUES = [
  {
    title: "Practical over flashy",
    description: "Useful products beat impressive demos.",
  },
  {
    title: "Real users over vanity metrics",
    description: "Adoption and retention matter more than hype.",
  },
  {
    title: "Shipping over talking",
    description: "Progress shows up in releases, not slide decks.",
  },
  {
    title: "Sustainable businesses over hype",
    description: "We build companies meant to last, not trend.",
  },
  {
    title: "Clear ownership",
    description: "Someone is always responsible for the outcome.",
  },
] as const;
