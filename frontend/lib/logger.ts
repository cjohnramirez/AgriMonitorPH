/**
 * Simple Monitoring Utility
 * Logs application events to the console (visible in browser dev tools/Vercel logs)
 */
export const logEvent = (name: string, data?: object) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] EVENT: ${name}`, data || "");
};

export const logError = (error: string, context: string) => {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] ERROR in ${context}: ${error}`);
};