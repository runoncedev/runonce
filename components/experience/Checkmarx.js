import Card from "../ExperienceCard";
import Strong from "../Strong";
import Subtitle from "../Subtitle";
import TechList from "../TechList";
import TechListItem from "../TechListItem";
import Ul from "../Ul";
import formatDate from "./formatDate";
import getDiff from "./getDiff";

export default function Checkmarx() {
  const startDate = new Date("2025-12-02");
  const endDate = new Date();

  const formattedStartDate = formatDate(startDate);

  const formattedDiff = getDiff(endDate, startDate);

  return (
    <Card
      title="Full-stack engineer"
      at="Checkmarx"
      industry="Cybersecurity and AI"
      subtitle={
        <Subtitle>
          {formattedStartDate} — {formattedDiff}
        </Subtitle>
      }
      summary={
        <TechList>
          <TechListItem>Python</TechListItem>
          <TechListItem>LangSmith</TechListItem>
          <TechListItem>React</TechListItem>
          <TechListItem>webpack</TechListItem>
        </TechList>
      }
    >
      <Ul>
        <li>Joined following Checkmarx&apos;s acquisition of Tromzo.</li>
        <li>
          Build and maintain evaluation datasets used to measure and improve
          agent accuracy, manually triaging vulnerabilities across different
          codebases in <Strong>Go</Strong>, <Strong>C#</Strong>,{" "}
          <Strong>Java</Strong>, and <Strong>TypeScript</Strong>.
        </li>
        <li>
          Compare agent outputs against ground truth, identify failure cases,
          apply direct fixes when feasible, and escalate complex cases with
          detailed feedback to the team.
        </li>
        <li>
          Continuously update reference values and organize datasets into
          splits.
        </li>
        <li>
          Set up and run a microfrontend architecture locally (shell + federated
          modules) in preparation for upcoming UI work on the next product
          phase.
        </li>
      </Ul>
    </Card>
  );
}
