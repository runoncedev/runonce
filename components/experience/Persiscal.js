import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Persiscal() {
  const startDate = new Date("2015-10-01");
  const endDate = new Date("2016-12-01");

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
          <Subtitle>Persiscal Consulting</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>CakePHP</TechListItem>
          <TechListItem>CSS</TechListItem>
          <TechListItem>Bootstrap</TechListItem>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>PHP</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Joined as a freelance full-stack engineer in a small team for an
          educational project using <Strong>CakePHP</Strong>.
        </li>
        <li>
          Used <Strong>MySQL</Strong> for data storing.
        </li>
        <li>
          Used <Strong>CSS</Strong> and <Strong>Bootstrap</Strong> to style the
          contents of the web app.
        </li>
      </Ul>
    </Card>
  );
}
