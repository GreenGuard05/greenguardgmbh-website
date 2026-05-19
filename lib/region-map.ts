// Schematische Sachsen-Anhalt-Karte (SVG). Umriss u. a. aus OpenStreetMap-Geodaten (ODbL 1.0), lokal eingebettet.
// Auto-generated projection (viewBox 0 0 400 520)
export const REGION_MAP_VIEWBOX = { width: 400, height: 520 } as const;
/** Erweiterter Ausschnitt, damit Ortslabels nicht am Rand abgeschnitten werden */
export const REGION_MAP_VIEWBOX_DISPLAY = {
  x: -56,
  y: -44,
  width: 512,
  height: 608,
} as const;
export const REGION_MAP_OUTLINE = "M 164.8,19.4 L 172.5,22.2 L 173.3,29.1 L 195.7,35.6 L 192.2,41.6 L 194.7,46.0 L 249.7,57.3 L 252.9,72.1 L 246.8,77.2 L 244.9,91.1 L 249.9,97.3 L 250.6,111.1 L 241.1,111.9 L 242.7,124.0 L 237.4,135.2 L 243.4,133.6 L 240.7,139.6 L 245.0,142.3 L 250.2,135.4 L 263.7,146.1 L 255.8,160.7 L 260.0,163.3 L 257.3,173.7 L 260.6,177.2 L 251.8,198.7 L 258.5,205.8 L 247.2,218.5 L 255.5,233.4 L 277.2,253.7 L 284.9,250.4 L 293.2,261.8 L 312.0,255.3 L 327.8,266.9 L 336.3,265.4 L 337.0,273.2 L 352.3,272.7 L 353.8,280.5 L 363.9,280.7 L 362.9,287.6 L 379.0,287.1 L 375.5,293.1 L 384.0,323.6 L 361.7,342.1 L 358.4,335.1 L 349.9,341.8 L 334.1,331.9 L 326.3,340.4 L 313.7,336.7 L 306.8,346.9 L 251.0,358.6 L 244.9,367.2 L 245.6,377.5 L 238.0,382.5 L 244.6,392.1 L 244.3,413.7 L 238.4,416.1 L 246.5,440.4 L 242.2,448.0 L 247.2,448.1 L 245.4,457.6 L 251.2,460.2 L 248.7,464.5 L 257.8,469.0 L 252.6,480.9 L 259.3,482.7 L 249.0,504.0 L 243.3,495.3 L 219.0,497.6 L 213.2,491.5 L 214.9,487.3 L 199.9,476.8 L 183.1,481.0 L 169.9,464.5 L 142.3,465.4 L 142.4,446.3 L 127.5,439.4 L 143.5,421.2 L 132.7,410.7 L 131.9,401.2 L 121.9,395.1 L 75.2,393.6 L 77.7,391.0 L 71.9,390.1 L 72.7,378.8 L 67.7,374.5 L 69.4,365.7 L 60.2,355.3 L 67.8,351.7 L 66.1,346.5 L 35.0,340.6 L 24.8,314.0 L 17.1,308.0 L 17.0,292.0 L 28.1,279.5 L 22.1,270.7 L 28.1,266.4 L 18.6,261.9 L 16.0,253.2 L 24.6,254.2 L 33.1,244.9 L 72.7,243.8 L 69.2,232.6 L 83.3,225.9 L 85.8,218.2 L 79.1,211.2 L 89.1,204.4 L 74.5,178.4 L 87.3,169.9 L 67.3,149.8 L 69.0,142.1 L 77.7,142.2 L 67.0,124.9 L 73.2,111.7 L 65.2,115.3 L 52.8,88.0 L 47.7,88.7 L 43.5,58.1 L 68.2,58.1 L 75.2,45.2 L 82.1,43.6 L 121.2,52.8 L 147.3,37.5 L 149.2,22.7 L 167.4,16.0 L 164.8,19.4 Z";
export const REGION_MAP_HQ = "Gerbstedt" as const;
export type RegionMapCity = {
  name: string;
  /** Kurzname auf der Karte */
  label: string;
  x: number;
  y: number;
  slug?: string;
  /** Label-Offset in SVG-Koordinaten (weit genug vom Marker entfernt) */
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: "start" | "middle" | "end";
};
export const regionMapCities: RegionMapCity[] = [
  {
    name: "Gerbstedt",
    label: "Gerbstedt · HQ",
    x: 162.6,
    y: 349.2,
    slug: "gerbstedt",
    labelDx: 0,
    labelDy: 36,
    labelAnchor: "middle",
  },
  {
    name: "Hettstedt",
    label: "Hettstedt",
    x: 147.2,
    y: 339.1,
    slug: "hettstedt",
    labelDx: -46,
    labelDy: -28,
    labelAnchor: "end",
  },
  {
    name: "Sangerhausen",
    label: "Sangerhausen",
    x: 118.7,
    y: 380.7,
    slug: "sangerhausen",
    labelDx: 14,
    labelDy: 10,
    labelAnchor: "start",
  },
  {
    name: "Mansfeld",
    label: "Mansfeld",
    x: 139.8,
    y: 352.4,
    slug: "mansfeld",
    labelDx: -48,
    labelDy: 24,
    labelAnchor: "end",
  },
  {
    name: "Lutherstadt Eisleben",
    label: "Eisleben",
    x: 153.0,
    y: 367.6,
    slug: "eisleben",
    labelDx: 24,
    labelDy: 36,
    labelAnchor: "start",
  },
  {
    name: "Aschersleben",
    label: "Aschersleben",
    x: 140.8,
    y: 314.1,
    slug: "aschersleben",
    labelDx: 14,
    labelDy: -10,
    labelAnchor: "start",
  },
  {
    name: "Bernburg",
    label: "Bernburg",
    x: 179.1,
    y: 305.2,
    slug: "bernburg",
    labelDx: 24,
    labelDy: -24,
    labelAnchor: "start",
  },
  {
    name: "Halberstadt",
    label: "Halberstadt",
    x: 82.7,
    y: 281.5,
    slug: "halberstadt",
    labelDx: 14,
    labelDy: -8,
    labelAnchor: "start",
  },
  {
    name: "Quedlinburg",
    label: "Quedlinburg",
    x: 97.3,
    y: 306.6,
    slug: "quedlinburg",
    labelDx: 14,
    labelDy: 10,
    labelAnchor: "start",
  },
  {
    name: "Halle (Saale)",
    label: "Halle",
    x: 211.9,
    y: 378.4,
    slug: "halle-saale",
    labelDx: 24,
    labelDy: -18,
    labelAnchor: "start",
  },
];
export const regionMapHq = regionMapCities.find((c) => c.name === REGION_MAP_HQ)!;
