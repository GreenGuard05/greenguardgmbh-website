import "server-only";

import { promises as fs } from "fs";
import path from "path";
import {
  defaultRentalDevices,
  slugifyRentalDeviceName,
  type RentalDevice,
} from "@/lib/rental-devices";

const FILE = path.join(process.cwd(), "content", "rental-devices.json");

function cleanDevice(raw: unknown, index: number): RentalDevice | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const data = raw as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  if (!name) return null;

  const idSource = typeof data.id === "string" && data.id.trim() ? data.id.trim() : name;
  return {
    id: `${slugifyRentalDeviceName(idSource)}-${index}`.replace(/-0$/, ""),
    name,
    image: typeof data.image === "string" ? data.image.trim() : "",
    description: typeof data.description === "string" ? data.description.trim() : "",
    details: typeof data.details === "string" ? data.details.trim() : "",
    facts: Array.isArray(data.facts) ? data.facts.filter((item): item is string => typeof item === "string" && item.trim() !== "").map((item) => item.trim()) : [],
    price: typeof data.price === "string" ? data.price.trim() : "",
    deposit: typeof data.deposit === "string" ? data.deposit.trim() : "",
    fuel: typeof data.fuel === "string" ? data.fuel.trim() : "",
    suitableFor: Array.isArray(data.suitableFor)
      ? data.suitableFor.filter((item): item is string => typeof item === "string" && item.trim() !== "").map((item) => item.trim())
      : [],
    notSuitableFor: Array.isArray(data.notSuitableFor)
      ? data.notSuitableFor.filter((item): item is string => typeof item === "string" && item.trim() !== "").map((item) => item.trim())
      : [],
  };
}

async function readRentalDevicesUncached(): Promise<RentalDevice[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return defaultRentalDevices;
    const devices = parsed.map(cleanDevice).filter((device): device is RentalDevice => Boolean(device));
    return devices.length ? devices : defaultRentalDevices;
  } catch {
    return defaultRentalDevices;
  }
}

export async function getRentalDevices(): Promise<RentalDevice[]> {
  return readRentalDevicesUncached();
}

export async function writeRentalDevices(devices: RentalDevice[]): Promise<void> {
  const cleaned = devices.map(cleanDevice).filter((device): device is RentalDevice => Boolean(device));
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(cleaned, null, 2) + "\n", "utf8");
}
