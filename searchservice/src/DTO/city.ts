//create city

import { z } from 'zod';

export const cityValid = z.object({
	name: z.string({ message: 'Name must be string' })
});

export type CityDTO = z.infer<typeof cityValid>; // number