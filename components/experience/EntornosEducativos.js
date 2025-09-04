import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function EntornosEducativos() {
  const startDate = new Date("2012-06-01");
  const endDate = new Date("2014-08-01");

  const formattedStartDate = formatDate(startDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Full-stack engineer"
      subtitle={
        <>
          <Subtitle>
            {formattedStartDate} — {formattedDiff}
          </Subtitle>
          <Subtitle>Entornos Educativos</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>Bootstrap</TechListItem>
          <TechListItem>CSS</TechListItem>
          <TechListItem>Drupal</TechListItem>
          <TechListItem>Moodle</TechListItem>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>PHP</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Joined as a full-stack <Strong>PHP</Strong> engineer for e-learning
          products, mostly maintaining and extending <Strong>Moodle</Strong> and{" "}
          <Strong>Drupal</Strong> platforms.
        </li>
        <li>
          Used <Strong>MySQL</Strong> for data storing.
        </li>
        <li>
          Used <Strong>CSS</Strong> for styling the contents of the web apps.
        </li>
      </Ul>
    </Card>
  );
}
