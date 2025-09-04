import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Elementum() {
  const startDate = new Date("2019-05-01");
  const endDate = new Date("2020-11-01");

  const formattedStartDate = formatDate(startDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Frontend engineer"
      subtitle={
        <>
          <Subtitle>
            {formattedStartDate} — {formattedDiff}
          </Subtitle>
          <Subtitle>Elementum</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>Node.js</TechListItem>
          <TechListItem>React</TechListItem>
          <TechListItem>REST API</TechListItem>
          <TechListItem>styled-components</TechListItem>
          <TechListItem>webpack</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Worked on the development and maintenance of supply chain management
          products, contributing to the design and implementation of key
          features.
        </li>
        <li>
          Collaborated on developing and maintaining reusable UI elements,
          design tokens, and accessibility guidelines for a component library
          using <Strong>React</Strong>, <Strong>styled-components</Strong> and{" "}
          <Strong>Storybook</Strong>.
        </li>
        <li>
          Fine tuned <Strong>webpack</Strong> configurations and implemented
          other key optimizations, such as tree shaking, code splitting, and
          lazy loading. The results included a{" "}
          <strong>
            75% reduction in <code>npm install</code> time and a 70% improvement
            in overall Lighthouse score
          </strong>
          , enhancing both the user and developer experience.
        </li>
        <li>
          Implemented Module Federation as a potential replacement for an
          in-house micro frontend solution, exploring and evaluating new
          technologies to improve the frontend architecture of the product.
        </li>
        <li>
          Worked on the development and maintenance of microservices{" "}
          <Strong>REST APIs</Strong> using <Strong>Node.js</Strong>,{" "}
          <Strong>Express</Strong>, and <Strong>MongoDB</Strong>.
        </li>
      </Ul>
    </Card>
  );
}
