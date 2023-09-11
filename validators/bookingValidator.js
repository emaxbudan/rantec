import { z } from "zod";

export const bookingValidator = z.object({
    livestockId: z.string(),
    vetSpaceId: z.string(),
    date: z.date(),
    time: z.string(),
});