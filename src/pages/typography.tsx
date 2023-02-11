import Container from "@components/Container";
import Prose from "@components/Prose";
import Seo from "@components/Seo";
import { type NextPage } from "next";

const Typography: NextPage = () => {
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

      <Container verticalPadding="xl">
        <Prose>
          <h1>Typography</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam tincidunt, nunc elit aliquam nisl, nec
            lacinia nunc lorem eget dolor. Sed euismod, nisl nec aliquam
            tincidunt, nunc elit aliquam nisl, nec lacinia nunc lorem eget
            dolor. Sed euismod, nisl nec aliquam tincidunt, nunc elit aliquam
            nisl, nec lacinia nunc lorem eget dolor.
          </p>
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloremque modi consequatur esse magnam similique minus voluptatem
            amet, laudantium maiores.
          </p>
          <h3>Heading 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloremque modi consequatur esse magnam similique minus voluptatem
            amet, laudantium maiores.
          </p>
          <h4>Heading 4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloremque modi consequatur esse magnam similique minus voluptatem
            amet, laudantium maiores.
          </p>
          <h5>Heading 5</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloremque modi consequatur esse magnam similique minus voluptatem
            amet, laudantium maiores.
          </p>
          <h6>Heading 6</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloremque modi consequatur esse magnam similique minus voluptatem
            amet, laudantium maiores.
          </p>
          <h2>Colors</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam tincidunt, nunc elit aliquam nisl, nec
            lacinia nunc lorem eget dolor. Sed euismod, nisl nec aliquam
            tincidunt, nunc elit aliquam nisl, nec lacinia nunc lorem eget
            dolor. Sed euismod, nisl nec aliquam tincidunt, nunc elit aliquam
            nisl, nec lacinia nunc lorem eget dolor.
          </p>
          <hr />
          <h2>Lists</h2>
          <ul>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
          </ul>
          <ol>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
          </ol>
          <blockquote>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            porro autem corrupti similique nostrum quibusdam nihil eveniet
            possimus expedita obcaecati.
          </blockquote>
        </Prose>
      </Container>
    </>
  );
};

export default Typography;
