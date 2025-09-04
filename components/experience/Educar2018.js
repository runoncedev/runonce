import Card from "../ExperienceCard";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Educar2018() {
  const startDate = new Date("2018-02-01");
  const endDate = new Date("2018-07-01");

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
          <TechListItem>MySQL</TechListItem>
          <TechListItem>Redis</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Contributed as a technical manager for a series of outsourced
          educational products.
        </li>
        <li>
          Collaborated by defining the software architecture and conducting code
          reviews while interacting with external providers and stakeholders,
          assisting in roadmap planning, and participating in critical client
          meetings.
        </li>
      </Ul>
    </Card>
  );
}
