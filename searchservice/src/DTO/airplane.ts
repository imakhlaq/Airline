import { z } from 'zod';

export const airplaneValid = z.object({
	modelNumber: z.string(),
	capacity: z.number()
});

export type AirplaneDTO = z.infer<typeof airplaneValid>;

export const capacityChangeValid = z.object({
	airplaneId: z.string(),
	seatBooked: z.string()
});

export type CapacityDTO = z.infer<typeof capacityChangeValid>;
