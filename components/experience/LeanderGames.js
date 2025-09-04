import Card from "../ExperienceCard";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";

export default function LeanderGames() {
  return (
    <Card
      title="Frontend engineer"
      subtitle={
        <>
          <Subtitle>may 2017 — aug 2017</Subtitle>
          <Subtitle>Leander Games</Subtitle>
        </>
      }
      summary={
        <TechList>
          <TechListItem>JavaScript</TechListItem>
          <TechListItem>PixiJS</TechListItem>
          <TechListItem>REST API</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>
          Joined as a JavaScript game developer for online casinos. Worked with
          a custom in-house developed framework based on PixiJS consuming from a
          REST APIs.
        </li>
      </Ul>
    </Card>
  );
}
