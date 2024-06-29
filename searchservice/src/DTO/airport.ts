import { z } from 'zod';

export const airportValid = z.object({
	name: z.string(),
	cityId: z.string(),
	address: z.string()
});

export type AirportDTO = z.infer<typeof airportValid>;
