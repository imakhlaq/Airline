ALTER TABLE "flights" ADD COLUMN "departure_airport_id" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "flights" ADD COLUMN "destination_airport_id" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "flights" DROP COLUMN IF EXISTS "departure_city_id";--> statement-breakpoint
ALTER TABLE "flights" DROP COLUMN IF EXISTS "destination_city_id";