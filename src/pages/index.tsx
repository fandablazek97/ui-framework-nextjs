import Alert from "@components/Alert";
import Badge from "@components/Badge";
import Button from "@components/Button";
import Container from "@components/Container";
import Seo from "@components/Seo";
import { type NextPage } from "next";
import { useState } from "react";

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
// - Prose component (Tailwind typography)
// - Tabs component -> Write reusable props and types
// - Tooltip component
// - Badge component
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

function StarIcon({ ...props }: { [x: string]: any }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

const colors = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "neutral",
];

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
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

      <Container verticalPadding="lg" className="space-y-5">
        <h1 className="text-body-rich text-4xl font-bold sm:text-6xl lg:text-9xl">
          Lorem ipsum dolor
        </h1>
        <p className="max-w-prose pt-12 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident recusandae labore praesentium esse ipsum ducimus aut ut
          voluptatibus. Aspernatur!
        </p>
      </Container>

      <Container verticalPadding="xl" className="space-y-8">
        <div className="flex flex-wrap items-start justify-start gap-3">
          <Button size="xs">Button xs</Button>
          <Button size="sm">Button sm</Button>
          <Button size="md">Button md</Button>
          <Button size="lg">Button lg</Button>
          <Button size="xl">Button xl</Button>
        </div>
        {colors.map((color) => (
          <div key={color} className="flex flex-wrap gap-3">
            <Button
              variant="filled"
              leftIcon={<StarIcon />}
              isLoading={loading}
              onClick={() => setLoading(true)}
              color={color}
            >
              {color}
            </Button>
            <Button
              variant="subtle"
              leftIcon={<StarIcon />}
              onClick={() => setLoading(false)}
              color={color}
            >
              {color}
            </Button>
            <Button
              variant="subtle"
              isLoading={loading}
              leftIcon={<StarIcon />}
              color={color}
            >
              {color}
            </Button>
            <Button
              variant="outlined"
              leftIcon={<StarIcon />}
              isLoading={loading}
              color={color}
            >
              {color}
            </Button>
            <Button
              variant="plain"
              leftIcon={<StarIcon />}
              isLoading={loading}
              color={color}
            >
              {color}
            </Button>
            <Button variant="filled" isDisabled={true} color={color}>
              {color}
            </Button>
            <Button
              variant="filled"
              size="lg"
              leftIcon={<StarIcon />}
              isLoading={loading}
              isFullWidth
              color={color}
            >
              {color}
            </Button>
          </div>
        ))}
      </Container>

      <Container verticalPadding="md" className="space-y-8">
        {colors.map((color) => (
          <div
            key={color}
            className="flex flex-wrap items-start justify-start gap-3"
          >
            <Badge variant="filled" color={color}>
              {color}
            </Badge>
            <Badge variant="filled" hasDot color={color}>
              {color}
            </Badge>
            <Badge variant="filled" hasDot isDismissable color={color}>
              {color}
            </Badge>
            <Badge variant="subtle" color={color}>
              {color}
            </Badge>
            <Badge variant="subtle" hasDot color={color}>
              {color}
            </Badge>
            <Badge variant="subtle" hasDot isDismissable color={color}>
              {color}
            </Badge>
            <Badge variant="outlined" color={color}>
              {color}
            </Badge>
            <Badge variant="outlined" hasDot color={color}>
              {color}
            </Badge>
            <Badge variant="outlined" hasDot isDismissable color={color}>
              {color}
            </Badge>
          </div>
        ))}
      </Container>

      <Container verticalPadding="md" className="grid gap-6 md:grid-cols-2">
        <Alert
          status="success"
          variant="filled"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="success"
          variant="subtle"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="warning"
          variant="filled"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="warning"
          variant="subtle"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="error"
          variant="filled"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="error"
          variant="subtle"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="neutral"
          variant="filled"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="neutral"
          variant="subtle"
          title="Lorem ipsum dolor"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
      </Container>

      <Container verticalPadding="md" className="grid gap-6 md:grid-cols-2">
        <Alert status="success" variant="filled" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="success" variant="subtle" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="success"
          customIcon={<StarIcon className="h-6 w-6" />}
          variant="filled"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert
          status="success"
          customIcon={<StarIcon className="h-6 w-6" />}
          variant="subtle"
          className="col-span-1"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="warning" variant="filled" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="warning" variant="subtle" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="error" variant="filled" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="error" variant="subtle" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="neutral" variant="filled" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
        <Alert status="neutral" variant="subtle" className="col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptatem vel rem fugiat ipsa ipsum perspiciatis, quo neque
          consequatur id.
        </Alert>
      </Container>
    </>
  );
};

export default Home;
