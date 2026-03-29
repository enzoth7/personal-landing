import type { ServiceId } from "@/src/constants/services";

export type OnboardingQuestionTemplate = {
  id: string;
  options: Array<{
    value: string;
    scores: Partial<Record<ServiceId, number>>;
  }>;
};

export const ONBOARDING_CATEGORY_ORDER = [
  "CP-001",
  "AA-112",
  "DB-025",
  "WF-009",
  "WF-055",
  "AA-201",
  "AA-147",
] as const satisfies readonly ServiceId[];

export const ONBOARDING_QUESTION_TEMPLATES: OnboardingQuestionTemplate[] = [
  {
    id: "current-bottleneck",
    options: [
      {
        value: "many_whatsapps",
        scores: { "AA-112": 3, "AA-147": 1 },
      },
      {
        value: "messy_data",
        scores: { "DB-025": 3, "WF-055": 1 },
      },
      {
        value: "manual_tasks",
        scores: { "CP-001": 3, "AA-201": 2, "WF-009": 1 },
      },
    ],
  },
  {
    id: "people-affected",
    options: [
      {
        value: "one_to_two_people",
        scores: { "WF-055": 2, "AA-201": 2 },
      },
      {
        value: "three_to_five_people",
        scores: { "AA-112": 1, "WF-009": 2 },
      },
      {
        value: "whole_team",
        scores: { "CP-001": 4, "DB-025": 2, "AA-147": 1 },
      },
    ],
  },
  {
    id: "stress-point",
    options: [
      {
        value: "sales_follow_up",
        scores: { "AA-112": 3, "WF-009": 1 },
      },
      {
        value: "reporting_profitability",
        scores: { "DB-025": 3 },
      },
      {
        value: "internal_operations",
        scores: { "CP-001": 3, "AA-201": 1, "AA-147": 1 },
      },
    ],
  },
  {
    id: "integration-level",
    options: [
      {
        value: "everything_isolated",
        scores: { "CP-001": 4, "WF-009": 2 },
      },
      {
        value: "manual_patches",
        scores: { "AA-112": 1, "AA-201": 2, "AA-147": 1 },
      },
      {
        value: "partial_integration",
        scores: { "DB-025": 2, "AA-112": 1 },
      },
    ],
  },
  {
    id: "priority-quarter",
    options: [
      {
        value: "better_capture_close",
        scores: { "AA-112": 3, "WF-009": 1 },
      },
      {
        value: "real_business_control",
        scores: { "DB-025": 3, "WF-055": 1 },
      },
      {
        value: "remove_manual_work",
        scores: { "CP-001": 3, "AA-201": 2, "AA-147": 1 },
      },
    ],
  },
];

export const ONBOARDING_SCORE_MAP = ONBOARDING_QUESTION_TEMPLATES.reduce<
  Record<string, Partial<Record<ServiceId, number>>>
>((scoreMap, question) => {
  question.options.forEach((option) => {
    scoreMap[option.value] = option.scores;
  });

  return scoreMap;
}, {});
