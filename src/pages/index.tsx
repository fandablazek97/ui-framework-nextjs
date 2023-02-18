import Alert from "@components/Alert";
import Avatar from "@components/Avatar";
import Badge from "@components/Badge";
import Button from "@components/Button";
import Collapse from "@components/Collapse";
import Container from "@components/Container";
import Heading from "@components/Heading";
import TextInput from "@components/inputs/TextInput";
import Seo from "@components/Seo";
import Tab from "@components/unstable/Tabs";
import { type NextPage } from "next";

// ToDo
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

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Hlavní stránka"
        description="Lorem ipsum dolor"
        noIndex={true}
      />
      <Container py="xl" className="flex flex-col items-start justify-start">
        <Heading level={2} size="2xl" color="gradient">
          Lorem ipsum dolor
        </Heading>
        <div className="flex flex-wrap gap-4 pt-8">
          <Button>Button CTA</Button>
          <Button intent="secondary">Button CTA</Button>
          <Button intent="plain">Button CTA</Button>
          <Button intent="destructive">Button CTA</Button>
          <Button intent="gray">Button CTA</Button>
          <Button intent="white">Button CTA</Button>
          <Button intent="black">Button CTA</Button>
        </div>
        <div className="flex flex-wrap gap-4 pt-8">
          <Badge>Badge</Badge>
          <Badge color="secondary">Badge</Badge>
          <Badge color="success">Badge</Badge>
          <Badge color="warning">Badge</Badge>
          <Badge color="error">Badge</Badge>
          <Badge color="gray">Badge</Badge>
        </div>
        <div className="flex flex-wrap gap-4 pt-8">
          <Badge intent="filled">Badge</Badge>
          <Badge intent="filled" color="secondary">
            Badge
          </Badge>
          <Badge intent="filled" color="success">
            Badge
          </Badge>
          <Badge intent="filled" color="warning">
            Badge
          </Badge>
          <Badge intent="filled" color="error">
            Badge
          </Badge>
          <Badge intent="filled" color="gray">
            Badge
          </Badge>
        </div>
        <div className="flex flex-wrap gap-4 pt-8">
          <Avatar.Group>
            <Avatar name="Fanda Blažek" />
            <Avatar name="Fanda Blažek" />
            <Avatar name="Fanda Blažek" />
          </Avatar.Group>
          <Avatar.Group>
            <Avatar
              randomFallbackColor={false}
              ringWidth="sm"
              ringColor="primary"
              name="Fanda Blažek"
            />
            <Avatar
              randomFallbackColor={false}
              ringWidth="sm"
              ringColor="primary"
              name="Fanda Blažek"
            />
            <Avatar
              randomFallbackColor={false}
              ringWidth="sm"
              ringColor="primary"
              name="Fanda Blažek"
            />
          </Avatar.Group>
        </div>
      </Container>

      <Container py="md" className="grid gap-5 md:grid-cols-2">
        <div className="col-span-1 space-y-5">
          <Alert status="success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="error">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="neutral">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
        </div>
        <div className="col-span-1 space-y-5">
          <Alert status="success" intent="filled" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="warning" intent="filled" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="error" intent="filled" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
          <Alert status="neutral" intent="filled" title="Lorem ipsum dolor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iusto
            dolorem quas magnam ducimus, id facilis aliquam tempora ipsum
            placeat.
          </Alert>
        </div>
      </Container>

      <Container py="md" className="grid gap-5 md:grid-cols-2">
        <Collapse.Group className="col-span-1">
          <Collapse
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit?"
            isDefaultOpen
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            ratione sed fuga laborum aliquid rem in tempora corrupti nisi
            inventore blanditiis, omnis accusantium excepturi dolores neque
            minima impedit nemo?
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet consectetur adipisicing elit?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            ratione sed fuga laborum aliquid rem in tempora corrupti nisi
            inventore blanditiis, omnis accusantium excepturi dolores neque
            minima impedit nemo?
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet consectetur adipisicing elit?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            ratione sed fuga laborum aliquid rem in tempora corrupti nisi
            inventore blanditiis, omnis accusantium excepturi dolores neque
            minima impedit nemo?
          </Collapse>
        </Collapse.Group>
        <Collapse.Group className="col-span-1">
          <Collapse title="Lorem ipsum dolor sit amet consectetur adipisicing elit?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            ratione sed fuga laborum aliquid rem in tempora corrupti nisi
            inventore blanditiis, omnis accusantium excepturi dolores neque
            minima impedit nemo?
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet consectetur adipisicing elit?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            ratione sed fuga laborum aliquid rem in tempora corrupti nisi
            inventore blanditiis, omnis accusantium excepturi dolores neque
            minima impedit nemo?
          </Collapse>
          <Collapse title="Lorem ipsum dolor sit amet consectetur adipisicing elit?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam
            ratione sed fuga laborum aliquid rem in tempora corrupti nisi
            inventore blanditiis, omnis accusantium excepturi dolores neque
            minima impedit nemo?
          </Collapse>
        </Collapse.Group>
      </Container>

      <Container size="sm" py="md">
        <Tab.Group>
          <Tab.List>
            <Tab>Heading 1</Tab>
            <Tab>Heading 2</Tab>
            <Tab>Heading 3</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur accusamus aliquid esse cum fugiat voluptatum temporibus
              unde. Reprehenderit, iste tenetur.
            </Tab.Panel>
            <Tab.Panel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              repellendus eum perspiciatis dolorem earum, perferendis, quas,
              quam quis sed nam blanditiis assumenda tempore eveniet officia
              alias? Laboriosam ipsam ipsa perspiciatis.
            </Tab.Panel>
            <Tab.Panel>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              nostrum sequi id accusantium possimus tempore voluptates maxime in
              consectetur. Vel doloremque consequuntur sed distinctio autem
              minima magnam cum, cupiditate quibusdam, aperiam ratione corrupti
              sunt hic tenetur molestias et. Soluta, voluptates?
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Container>

      <Container size="sm" py="md" className="space-y-5">
        <TextInput name="input" placeholder="placeholder" label="Label" />
        <TextInput
          name="input"
          intent="filled"
          placeholder="placeholder"
          label="Label"
          helperText="helper text"
        />
        <TextInput
          name="input"
          isRequired
          placeholder="placeholder"
          label="Label"
          helperText="helper text"
        />
        <TextInput
          name="input"
          placeholder="placeholder"
          label="Label"
          helperText="helper text"
        />
        <TextInput
          name="input"
          isInvalid
          placeholder="placeholder"
          label="Label"
          helperText="helper text"
          errorText="error text"
        />
      </Container>
    </>
  );
};

export default Home;
