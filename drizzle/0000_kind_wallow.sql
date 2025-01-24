CREATE TABLE "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"transaction_id" varchar NOT NULL,
	"status" varchar NOT NULL,
	"payment_method" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"next_due_date" timestamp NOT NULL,
	CONSTRAINT "payments_transaction_id_unique" UNIQUE("transaction_id")
);
--> statement-breakpoint
CREATE TABLE "reminders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"type" varchar NOT NULL,
	"status" varchar NOT NULL,
	"scheduled_for" timestamp NOT NULL,
	"sent" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"email" varchar,
	"status" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"last_payment_date" timestamp,
	"next_due_date" timestamp,
	CONSTRAINT "users_phone_unique" UNIQUE("phone"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
