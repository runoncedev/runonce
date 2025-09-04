import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Educar() {
  const startDate = new Date("2014-09-01");
  const endDate = new Date("2017-04-01");

  const formattedStartDate = formatDate(startDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Tech lead"
      subtitle={
        <>
          <Subtitle>
            {formattedStartDate} — {formattedDiff}
          </Subtitle>
          <Subtitle>Educ.ar</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>PHP</TechListItem>
          <TechListItem>Laravel</TechListItem>
          <TechListItem>OAuth</TechListItem>
          <TechListItem>Redis</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Led a team of developers in the migration of a large legacy product to{" "}
          <Strong>Laravel</Strong>, coordinating tasks and ensuring delivery
          without disrupting existing users.
        </li>
        <li>
          Created an <Strong>OAuth</Strong> server in <Strong>Laravel</Strong>,
          implementing industry-standard authentication protocols and
          contributing to the security and scalability of the web application.
        </li>
        <li>
          Maintained legacy systems and implemented <Strong>Redis</Strong> for
          caching, significantly improving application response time and
          reducing server load.
        </li>
        <li>
          Communicated realistic expectations to product managers and owners on
          a regular basis, providing transparency and ensuring alignment between
          project goals and delivery. Organized team and tasks to successfully
          complete projects on time, leveraging agile methodologies and
          effective communication to achieve project milestones.
        </li>
      </Ul>
    </Card>
  );
}
