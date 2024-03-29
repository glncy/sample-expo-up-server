import { expoUp } from "@/utils/expoUp";

export async function GET() {
  return expoUp.initializeAuthFile();
}

export async function POST(req: Request) {
  return expoUp.uploadAndRollback(req);
}
