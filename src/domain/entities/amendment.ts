import { s } from "@/src/infra/schema";

const amendmentSkeleton = {
  id: s.string(),
  number: s.number(),
  value: s.number(),
  subscriptionDate: s.date(),
  dueDate: s.date(),
  signatureDate: s.date(),
};

export const Amendment = s.object(amendmentSkeleton).required();
export type Amendment = s.infer<typeof Amendment>;
