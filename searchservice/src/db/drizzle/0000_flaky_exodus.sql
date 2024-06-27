CREATE TABLE IF NOT EXISTS "airplanes" (
	"airplane_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"airplane_model_number" varchar(256) NOT NULL,
	"airplane_capacity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "airports" (
	"airport_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"airport_name" varchar(256) NOT NULL,
	"city_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "city" (
	"airport_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"airport_name" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flights" (
	"airplane_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"departure_city_id" varchar(256) NOT NULL,
	"destination_city_id" varchar(256) NOT NULL,
	"city_id" uuid,
	"departure_time" timestamp NOT NULL,
	"arrival_time" timestamp NOT NULL,
	"flight_number" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "airports" ADD CONSTRAINT "airports_city_id_city_airport_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."city"("airport_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flights" ADD CONSTRAINT "flights_city_id_airplanes_airplane_id_fk" FOREIGN KEY ("city_id") REFERENCES "public"."airplanes"("airplane_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
