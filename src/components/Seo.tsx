import { NextSeo } from "next-seo";

type SeoProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

export default function Seo({
  title,
  description,
  noIndex = false,
  noFollow = false,
}: SeoProps) {
  return (
    <NextSeo
      title={title}
      titleTemplate="%s | Značka"
      description={description}
      openGraph={{ title, description }}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
}
