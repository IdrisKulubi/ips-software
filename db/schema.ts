
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  decimal,
  boolean,
} from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  phone: varchar("phone").unique().notNull(),
  email: varchar("email").unique(),
  status: varchar("status").notNull(), // 'active', 'suspended', 'disconnected'
  createdAt: timestamp("created_at").defaultNow(),
  lastPaymentDate: timestamp("last_payment_date"),
  nextDueDate: timestamp("next_due_date"),
});
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  transactionId: varchar("transaction_id").unique().notNull(),
  status: varchar("status").notNull(), // 'pending', 'completed', 'failed'
  paymentMethod: varchar("payment_method").notNull(), // 'mpesa', 'other'
  createdAt: timestamp("created_at").defaultNow(),
  nextDueDate: timestamp("next_due_date").notNull(),
});

export const reminders = pgTable("reminders", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  type: varchar("type").notNull(), // '2_days', '1_day', 'due_day'
  status: varchar("status").notNull(), // 'pending', 'sent', 'failed'
  scheduledFor: timestamp("scheduled_for").notNull(),
  sent: boolean("sent").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

