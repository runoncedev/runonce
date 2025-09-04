import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";
export default function Konfio() {
  const startDate = new Date("2021-06-01");
  const endDate = new Date("2022-12-01");

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Frontend engineer"
      subtitle={
        <>
          <Subtitle>
            {formattedStartDate} — {formattedDiff}
          </Subtitle>
          <Subtitle>Konfio</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>Material UI</TechListItem>
          <TechListItem>Node.js</TechListItem>
          <TechListItem>React</TechListItem>
          <TechListItem>Tailwind CSS</TechListItem>
          <TechListItem>TypeScript</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Collaborated on the user dashboard migration from PHP to{" "}
          <Strong>React</Strong> to improve page load times. Developed
          responsive design and data visualization features.
        </li>
        <li>
          Participated in the development of the Authentication API microservice
          using <Strong>Nest.js</Strong> and <Strong>Amazon Cognito</Strong>.
          Implemented user authentication, authorization, and password recovery
          features.
        </li>
        <li>
          Collaborated on developing and maintaining reusable UI elements,
          design tokens, and accessibility guidelines for a component library
          using <Strong>Material UI</Strong>, <Strong>Tailwind CSS</Strong>, and{" "}
          <Strong>Storybook</Strong>.
        </li>
        <li>
          Worked with other developers and designers to develop new features and
          fix bugs on the frontend of the main product using{" "}
          <Strong>React</Strong>.
        </li>
      </Ul>
    </Card>
  );
}
