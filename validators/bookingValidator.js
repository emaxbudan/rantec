import {z} from "zod";

export const bookingValidator = z.object({
    livestockId: z.string.required(),
    vetSpaceId: z.string.required(),
    date: z.date.required(),
    time: z.string.required(),
  });