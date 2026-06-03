/**
 * Simple client-side authentication utilities.
 */

const AUTH_KEY = "blog_auth_token";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function loginUser(username: string, password: string): boolean {
  if (typeof window === "undefined") return false;
  
  // Hardcoded credentials as requested by USER
  if (username === "admin" && password === "admin123") {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function logoutUser(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_KEY);
}
