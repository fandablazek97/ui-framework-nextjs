import Container from "@components/Container";
import Seo from "@components/Seo";
import { type NextPage } from "next";

import Alert from "@components/Alert";
import Badge from "@components/Badge";
import ButtonNew from "@components/ButtonNew";
import Collapse from "@components/Collapse";

// ToDo
// - Update theme variables to be in production version
// - Resolve all unstable components and make them stable
// - Add i18n support (probably react-i18next)
// - Write global config for cookies, gdpr and other stuff
// - Prepare implementation of google analytics and google tag manager
// - Add sitemap and robots.txt generator
// - Add Error 404 page
// Components
// - Social media share component
// - Cookie consent component (with consent manager) - according to EU law
// - Scroll down arrow component (with target id prop)
// - Navbar component (Rewrite it to be more pretty and flexible)
// - Tabs component -> Write reusable props and types
// - Tooltip component
// - Skip to content Component
// - Forms
// - - Input
// - - Textarea
// - - Number input
// - - Select (native)
// - - Select (js)
// - - Checkbox
// - - Radio
// - - Switch
// - - Slider
// - - Datepicker (Kuba)
// - - File upload
// - - Draggable file upload
// - - Auto complete (Headless UI combo box)
// - - Form validation
// - - Spam protection (recaptcha?)

const variants = [
  "filled",
  "tinted",
  "outlined",
  "plain",
  "destructive",
  "gray",
  "unstyled",
];

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Hlavní stránka"
        description="Lorem ipsum dolor"
        noIndex={true}
      />
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container verticalPadding="xl" className="space-y-5">
        <h1 className="text-body-rich text-4xl font-bold sm:text-6xl lg:text-9xl">
          Lorem ipsum dolor
        </h1>
        <p className="text-test max-w-prose pt-12 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident recusandae labore praesentium esse ipsum ducimus aut ut
          voluptatibus. Aspernatur!
        </p>
        <div className="space-x-2">
          {variants.map((variant) => (
            <ButtonNew key={variant} variant={variant}>
              Button CTA
            </ButtonNew>
          ))}
        </div>
      </Container>

      <Container verticalPadding="xl">
        <Badge>Badge</Badge>
        <Badge color="secondary">Badge</Badge>
        <Badge color="success">Badge</Badge>
        <Badge color="warning">Badge</Badge>
        <Badge color="error">Badge</Badge>
        <Badge color="neutral">Badge</Badge>
        <Badge color="white">Badge</Badge>
        <Badge color="black">Badge</Badge>
      </Container>

      <Container verticalPadding="xl" className="grid gap-5 md:grid-cols-2">
        <div className="col-span-1 space-y-5">
          <Alert status="success" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="warning" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="error" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="neutral" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
        </div>
        <div className="col-span-1 space-y-5">
          <Alert status="success" variant="tinted" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="warning" variant="tinted" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="error" variant="tinted" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="neutral" variant="tinted" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
        </div>
      </Container>

      <Container verticalPadding="xl" size="sm">
        <Collapse.Group>
          <Collapse title="Lorem ipsum dolor sit amet?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aperiam optio sint porro facilis sit nam amet ducimus impedit
            praesentium!
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aperiam optio sint porro facilis sit nam amet ducimus impedit
            praesentium!
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aperiam optio sint porro facilis sit nam amet ducimus impedit
            praesentium!
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            aperiam optio sint porro facilis sit nam amet ducimus impedit
            praesentium!
          </Collapse>
        </Collapse.Group>
      </Container>
    </>
  );
};

export default Home;
