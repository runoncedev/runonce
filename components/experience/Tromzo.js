import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Tromzo() {
  const startDate = new Date("2023-08-01");
  const endDate = new Date();

  const formattedStartDate = formatDate(startDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Frontend engineer"
      at="Tromzo"
      industry="Cybersecurity and AI"
      // url="case/tromzo"
      subtitle={
        <Subtitle>
          {formattedStartDate} — {formattedDiff}
        </Subtitle>
      }
      summary={
        <TechList>
          <TechListItem>GraphQL</TechListItem>
          <TechListItem>Material UI</TechListItem>
          <TechListItem>Playwright</TechListItem>
          <TechListItem>React</TechListItem>
          <TechListItem>TypeScript</TechListItem>
          <TechListItem>webpack</TechListItem>
          <TechListItem>Python</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Contributed to the <Strong>Playwright</Strong> test suites, writing
          tests for new features and adding test cases to cover regressions.
        </li>
        <li>
          Added <Strong>Storybook</Strong> to the project. Gradually adding more
          components to it, with props documentation and usage examples.
        </li>
        <li>
          Created a throughout performance report using{" "}
          <Strong>Lighthouse</Strong> and{" "}
          <Strong>webpack-bundle-analyzer</Strong>, which included a set of
          suggested follow up actions such as: lazy loading a certain library or
          changing some <Strong>webpack</Strong> configuration.
        </li>
        <li>
          Created a new dropdown component that renders up to 300x more options
          than it&apos;s predecessor with very small performance impact.
          Achieved by leveraging <Strong>Material UI</Strong> components and
          keeping the DOM nodes count at minimum.
        </li>
        <li>Implemented the UI of new AI-related features.</li>
        <li>
          Identified and fixed long-standing rendering issues in the main layout
          using React Scan.
        </li>
        <li>
          Addressed several security vulnerabilities reported by different
          tools.
        </li>
      </Ul>
    </Card>
  );
}
