import { siteConfig } from "@configs/site-config";
import { NextSeo } from "next-seo";

type SeoProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

export default function Seo({
  title,
  description = siteConfig.seo.defaultDescription,
  noIndex = false,
  noFollow = false,
}: SeoProps) {
  return (
    <NextSeo
      title={title}
      titleTemplate={siteConfig.seo.titleTemplate}
      description={description}
      openGraph={{ title, description }}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
}
