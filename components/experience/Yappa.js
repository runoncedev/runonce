import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Yappa() {
  const startDate = new Date("2020-11-01");
  const endDate = new Date("2021-05-01");

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Backend engineer"
      subtitle={
        <>
          <Subtitle>
            {formattedStartDate} — {formattedDiff}
          </Subtitle>
          <Subtitle>Yappa World Inc.</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>Nest.js</TechListItem>
          <TechListItem>Node.js</TechListItem>
          <TechListItem>REST API</TechListItem>
          <TechListItem>TypeScript</TechListItem>
          <TechListItem>Vue.js</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Worked on the development and maintenance of microservices and gateway{" "}
          <Strong>REST APIs</Strong> using <Strong>TypeScript</Strong>,{" "}
          <Strong>Nest.js</Strong>, and <Strong>MySQL</Strong>.
        </li>
        <li>
          Implemented NATS as a messaging service between microservices,
          enhancing the reliability and performance of communication within the
          system.
        </li>
        <li>
          Collaborated on frontend tasks using <Strong>Vue.js</Strong>,
          contributing to the development and maintenance of the main product.
        </li>
      </Ul>
    </Card>
  );
}
