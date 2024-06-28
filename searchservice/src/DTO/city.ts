import { z } from 'zod';

export const cityValid = z.object({
	name: z.string({ message: 'Name must be string' })
});

export type CityDTO = z.infer<typeof cityValid>;

export const cityIdValid = z.object({
	id: z.string()
});
export type CityIdDTO = z.infer<typeof cityIdValid>;

export const citySearchValid = z.object({
	startsWith: z.string().optional(),
	limit: z.string().optional(),
	offset: z.string().optional()
});
export type CitySearchParam = z.infer<typeof citySearchValid>;
