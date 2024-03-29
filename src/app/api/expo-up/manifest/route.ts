import { expoUp } from "@/utils/expoUp";

export async function GET(req: Request) {
  return expoUp.sendUpdate(req);
}
