import {z} from "zod";

export const vetSpaceValidator = z.object({
    name: z.string.required(),
    location: z.string.required(),
    capacity: z.number.required(),
  });