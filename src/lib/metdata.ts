import { Metadata } from "next";
import { ensureStartsWith } from "./utils";





const { TWITTER_CREATOR, TWITTER_SITE } = process.env;
const twitterCreator = TWITTER_CREATOR
  ? ensureStartsWith(TWITTER_CREATOR, "@")
  : undefined;
const twitterSite = TWITTER_SITE
  ? ensureStartsWith(TWITTER_SITE, "https://")
  : undefined;
export function constructMetadata({
  title = "Ips Software",
  description = "Ips Software",
  image = "/favicon.ico",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    ...(twitterCreator &&
      twitterSite && {
        twitter: {
          card: "summary_large_image",
          creator: twitterCreator,
          site: twitterSite,
        },
      }),
    icons,
    metadataBase: new URL("https://ips-software.com/"),
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
