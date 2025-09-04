import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Gm2dev() {
  const startDate = new Date("2018-07-01");
  const endDate = new Date("2019-01-01");

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
          <Subtitle>GM2DEV</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>AngularJS</TechListItem>
          <TechListItem>CSS</TechListItem>
          <TechListItem>JavaScript</TechListItem>
          <TechListItem>Laravel</TechListItem>
          <TechListItem>PHP</TechListItem>
          <TechListItem>SQL</TechListItem>
          <TechListItem>REST API</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Worked on a series of fintech products utilizing{" "}
          <Strong>Laravel</Strong> and <Strong>AngularJS</Strong>.
        </li>
        <li>
          Developed single-page applications consuming from{" "}
          <Strong>REST APIs</Strong>.
        </li>
        <li>
          Collaborated in setting up the <Strong>Amazon Web Services</Strong>{" "}
          infrastructure, including EC2 instances and S3 buckets.
        </li>
      </Ul>
    </Card>
  );
}
