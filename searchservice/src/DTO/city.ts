import { z } from 'zod';

export const cityValid = z.object({
	name: z.string({ message: 'Name must be string' })
});

export type CityDTO = z.infer<typeof cityValid>; // number

export const cityIdValid = z.object({
	id: z.string()
});
export type CityIdDTO = z.infer<typeof cityIdValid>; // number
