import { z } from "zod";

/**
 * 1. INPUT VALIDATION: Zod Schema for Search
 * Ensures the search query is a string and limits length to prevent injection.
 */
export const SearchSchema = z.string().min(1).max(50).regex(/^[a-zA-Z0-9 ]*$/);

/**
 * 2. INPUT VALIDATION: Price Lookup Validation
 * Ensures users enter valid numbers for price queries.
 */
export const PriceLookupSchema = z.number().positive().max(1000);

/**
 * 3. BASIC AUTHENTICATION: Token Check
 * Simulates checking a token in localStorage for static "Protected" routes.
 */
export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('agri_secure_token') === 'ACT7_SECURE_ACCESS';
};