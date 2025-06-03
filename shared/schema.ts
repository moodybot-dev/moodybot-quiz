import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const quizResults = pgTable("quiz_results", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  totalScore: integer("total_score").notNull(),
  personalityType: text("personality_type").notNull(),
  answers: text("answers").notNull(), // JSON string of answers array
  completedAt: timestamp("completed_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertQuizResultSchema = createInsertSchema(quizResults).pick({
  sessionId: true,
  totalScore: true,
  personalityType: true,
  answers: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type QuizResult = typeof quizResults.$inferSelect;
export type InsertQuizResult = z.infer<typeof insertQuizResultSchema>;

// Quiz types
export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

export interface QuizOption {
  text: string;
  value: number;
  emoji: string;
}

export interface PersonalityType {
  type: string;
  emoji: string;
  weapon: string;
  description: string;
  resource: string;
  scoreRange: [number, number];
}

export interface QuizProgress {
  currentQuestionIndex: number;
  answers: number[];
  totalScore: number;
}
