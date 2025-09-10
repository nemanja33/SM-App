import bcrypt from "bcrypt";

export async function hashPassword(unHashPass: string): Promise<string> {
  return bcrypt.hash(unHashPass, 10).then((hash: string) => hash);
}

export async function verifyPassword(
  unHashPass: string,
  hashPass: string,
): Promise<boolean> {
  return bcrypt.compare(unHashPass, hashPass).then((result: boolean) => result);
}
