import { buildStructuredDataGraph } from "@/lib/seo";
import { getResolvedSiteMedia } from "@/lib/site-media.server";

/** Strukturierte Daten: LocalBusiness + WebSite (@graph) für Google Rich Results */
export async function OrganizationJsonLd() {
  const media = await getResolvedSiteMedia();
  const json = JSON.stringify(buildStructuredDataGraph(media.heroSide));
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
