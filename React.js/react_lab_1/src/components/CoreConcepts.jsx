import CoreConcept from "./CoreConcept";
import Section from "./Section";
import { CORE_CONCEPTS } from "../data/data";

const CoreConcepts = () => {
  return (
    <Section id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;