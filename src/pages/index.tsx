import Alert from "@components/Alert";
import Avatar from "@components/Avatar";
import Button from "@components/Button";
import CloseButton from "@components/CloseButton";
import Collapse from "@components/Collapse";
import Heading from "@components/Heading";
import Link from "@components/Link";
import Loader from "@components/Loader";
import Parallax from "@components/Parallax";
import Reveal from "@components/Reveal";
import Seo from "@components/Seo";
import Separator from "@components/Separator";
import { Tab } from "@components/Tabs";
import Toast from "@components/Toast";
import Wrapper from "@components/Wrapper";
import { type NextPage } from "next";
import { useState } from "react";

// ToDo
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
// - Prose component (Tailwind typography)
// - Tabs component -> Write reusable props and types
// - Tooltip component
// - Badge component
// - Button Component (rewrite)
// - - Button group
// - - Button Icon
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

const colors = [
  "primary",
  "secondary",
  "neutral",
  "success",
  "error",
  "warning",
  "info",
];

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
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

      <Wrapper paddedContent="lg" className="space-y-5">
        <h1 className="text-4xl font-bold text-content-strong sm:text-6xl lg:text-9xl">
          Lorem ipsum dolor
        </h1>
        <p className="max-w-prose pt-12 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident recusandae labore praesentium esse ipsum ducimus aut ut
          voluptatibus. Aspernatur!
        </p>

        <div className="grid grid-cols-3 gap-16 py-64">
          <Parallax offset={200} className="h-36 bg-primary text-white">
            <div>Parallax</div>
          </Parallax>
          <Parallax offset={50} className="h-36 bg-primary text-white">
            <div>Parallax</div>
          </Parallax>
          <Parallax offset={-200} className="h-36 bg-primary text-white">
            <div>Parallax</div>
          </Parallax>
        </div>

        <div className="max-w-3xl py-6">
          <Tab.Group>
            <Tab.List>
              <Tab>Content 1</Tab>
              <Tab>Content 2 long title</Tab>
              <Tab>Content 3</Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <Heading level={2} size="sm" hasMarginBottom>
                  Content 1
                </Heading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, quod dolore officiis repellat eligendi at quidem! Eos
                neque maiores minus quidem incidunt voluptates dolor,
                praesentium cupiditate fugit dignissimos sapiente! Molestiae
                perspiciatis, autem necessitatibus blanditiis aliquam excepturi
                modi libero minus hic.
              </Tab.Panel>
              <Tab.Panel>
                <Heading level={2} size="sm" hasMarginBottom>
                  Content 2
                </Heading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, quod dolore officiis repellat eligendi at quidem! Eos
                neque maiores minus dolor, praesentium cupiditate fugit
                dignissimos sapiente! Molestiae perspiciatis, autem
                necessitatibus blanditiis aliquam excepturi modi libero minus
                hic.
              </Tab.Panel>
              <Tab.Panel>
                <Heading level={2} size="sm" hasMarginBottom>
                  Content 3
                </Heading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, quod dolore officiis repellat eligendi at quidem! Eos.
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <Collapse.Group className="max-w-3xl py-6">
          <Collapse title="Lorem ipsum dolor - open" isDefaultOpen={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laudantium aut eos ducimus debitis quaerat reprehenderit quae quas
            incidunt eaque. Non vitae minus numquam repellat nisi! Autem dolores
            libero maxime veniam quibusdam, ratione consequuntur? Eligendi.
          </Collapse>
          <Collapse title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laudantium aut eos ducimus debitis quaerat reprehenderit quae quas
            incidunt eaque. Non vitae minus numquam repellat nisi! Autem dolores
            libero maxime veniam quibusdam, ratione consequuntur? Eligendi,
            animi? Asperiores voluptatibus, repudiandae rem voluptate porro,
            aliquam explicabo et magni perferendis velit molestias deleniti
            optio nesciunt quas eos dolores ab dolorem enim! Consequuntur
            pariatur, suscipit aspernatur ad tempora unde, praesentium ratione,
            ab adipisci iste nihil exercitationem deleniti excepturi nostrum
            ipsa laudantium beatae minus a.
          </Collapse>
          <Collapse title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laudantium aut eos ducimus debitis quaerat reprehenderit quae quas
            incidunt eaque. Non vitae minus numquam repellat nisi! Autem dolores
            libero maxime veniam quibusdam, ratione consequuntur? Eligendi.
          </Collapse>
        </Collapse.Group>

        <div className="flex flex-wrap gap-4 py-6">
          <Separator />
          <div className="flex space-x-10">
            <div>content</div>
            <Separator orientation="vertical" />
            <div>content</div>
            <Separator orientation="vertical" />
            <div>content</div>
            <Separator orientation="vertical" />
            <div>content</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 py-6">
          <Link href="/" hoverEffect="static" color="primary">
            Static
          </Link>
          <Link href="/" hoverEffect="appear" color="primary">
            Appear
          </Link>
          <Link href="/" hoverEffect="disappear" color="primary">
            Disappear
          </Link>
          <Link href="/" hoverEffect="slide-left" color="primary">
            Slide-left
          </Link>
          <Link href="/" hoverEffect="slide-right" color="primary">
            Slide-right
          </Link>
          <Link href="/" hoverEffect="slide-back" color="primary">
            Slide-back
          </Link>
          <Link href="/" hoverEffect="scale-up" color="primary">
            Scale-up
          </Link>
          <Link href="/" hoverEffect="scale-down" color="primary">
            Scale-down
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 py-6">
          <Button
            variant="filled"
            onClick={() => {
              setToastOpen(!toastOpen);
            }}
          >
            Open Toast
          </Button>
          <Toast
            open={toastOpen}
            onOpenChange={setToastOpen}
            color="neutral"
            title="Lorem ipsum dolor"
            content="Lorem ipsum dolor sit amet"
          />
        </div>

        <Reveal delay={0.5} className="flex flex-wrap gap-5">
          <div className="h-20 w-20 bg-primary">1</div>
          <div className="h-20 w-20 bg-primary">2</div>
          <div className="h-20 w-20 bg-primary">3</div>
          <div className="h-20 w-20 bg-primary">4</div>
          <div className="h-20 w-20 bg-primary">5</div>
          <div className="h-20 w-20 bg-primary">6</div>
        </Reveal>

        <div className="flex flex-wrap gap-4 py-6">
          <Avatar name="Fanda Blažek" size="xs" />
          <Avatar name="Fanda Blažek" size="sm" />
          <Avatar name="Fanda Blažek" size="md" />
          <Avatar name="Fanda Blažek" size="lg" />
          <Avatar name="Fanda Blažek" size="xl" />
          <Avatar name="Fanda Blažek" size="2xl" />
          <Avatar.Group>
            <Avatar name="Fanda Blažek" ringWidth="md" ringColor="primary" />
            <Avatar name="Fanda Blažek" ringWidth="md" ringColor="primary" />
            <Avatar name="Fanda Blažek" ringWidth="md" ringColor="primary" />
          </Avatar.Group>
        </div>

        <div className="flex flex-wrap gap-4 py-6">
          <Loader />
          <Loader size="xs" thickness="3" />
          <Loader size="sm" thickness="3" />
          <Loader size="md" thickness="3" />
          <Loader size="lg" thickness="3" />
          <Loader size="xl" thickness="3" />
          <Loader size="2xl" thickness="3" />
        </div>

        <div className="flex flex-wrap gap-4 py-6">
          <CloseButton />
          <CloseButton size="xs" />
          <CloseButton size="sm" />
          <CloseButton size="md" />
          <CloseButton size="lg" />
          <CloseButton size="xl" />
          <CloseButton size="inherit" className="text-5xl" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="col-span-1 space-y-8">
            <Alert status="success" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert status="error" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert status="warning" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert status="info" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert status="neutral" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
          </div>

          <div className="col-span-1 space-y-8">
            <Alert variant="subtle" status="success" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert variant="subtle" status="error" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert variant="subtle" status="warning" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert variant="subtle" status="info" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
            <Alert variant="subtle" status="neutral" title="This is alert">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis facilis qui nostrum nihil odio?
            </Alert>
          </div>
        </div>

        <Heading level={2} size="xs">
          Lorem ipsum dolor
        </Heading>
        <Heading level={2} size="sm">
          Lorem ipsum dolor
        </Heading>
        <Heading level={2} size="md">
          Lorem ipsum dolor
        </Heading>
        <Heading level={2} size="lg">
          Lorem ipsum dolor
        </Heading>
        <Heading level={2} size="xl">
          Lorem ipsum dolor
        </Heading>
        <Heading level={"none"} size="2xl">
          Lorem ipsum dolor
        </Heading>
      </Wrapper>

      <Wrapper>
        <Button onClick={() => setLoading(!loading)} className="mb-12">
          Načítání...
        </Button>

        {colors.map((color) => (
          <div key={color} className="mt-10 flex flex-wrap gap-5">
            <Button color={color} isLoading={loading} variant="filled">
              Button
            </Button>
            <Button color={color} isLoading={loading} variant="outlined">
              Button
            </Button>
            <Button color={color} isLoading={loading} variant="subtle">
              Button
            </Button>
            <Button color={color} isLoading={loading} variant="plain">
              Button
            </Button>
            <Button color={color} variant="filled" isLoading>
              Button
            </Button>
            <Button color={color} variant="filled" isDisabled>
              Button
            </Button>
            <Button
              color={color}
              variant="filled"
              isLoading={loading}
              isFullWidth
            >
              Button
            </Button>
          </div>
        ))}
      </Wrapper>

      <Wrapper paddedContent="lg" className="bg-body-50">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          iusto.
        </p>
      </Wrapper>
      <Wrapper paddedContent="lg" className="bg-body-100">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          iusto.
        </p>
      </Wrapper>
      <Wrapper paddedContent="lg" className="bg-body-50">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          iusto.
        </p>
      </Wrapper>
      <Wrapper paddedContent="lg" className="bg-body-100">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          iusto.
        </p>
      </Wrapper>
      <Wrapper paddedContent="lg" className="bg-body-50">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          iusto.
        </p>
      </Wrapper>
      <Wrapper paddedContent="lg" className="bg-body-100">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          iusto.
        </p>
      </Wrapper>
    </>
  );
};

export default Home;
