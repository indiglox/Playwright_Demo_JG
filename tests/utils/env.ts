function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (value === undefined || value.trim().length === 0) {
    throw new Error(
      `Missing required environment variable: ${name}. Add it to .env in the project root or set it in your shell.`
    );
  }
  return value;
}

export const SAUCE_USERNAME = getRequiredEnvVar('SAUCE_USERNAME');
export const SAUCE_PASSWORD = getRequiredEnvVar('SAUCE_PASSWORD');
export const SAUCE_INVALID_PASSWORD = getRequiredEnvVar('SAUCE_INVALID_PASSWORD');
