import {z} from "zod";

export const vetSpaceValidator = z.object({
    name: z.string(),
    location: z.string(),
    capacity: z.number(),
  }).required({message:"Fill all the field with the correct details"});