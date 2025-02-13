"use client";

interface Props {
  state: string;
}

const STATES = [
  "Conceptualization",
  "Requirement Analysis",
  "Design (tech & UIUX)",
  "Implementation",
  "Testing",
  "Deployment, and Maintenance",
];

export default function StateComponent({ state }: Props) {
  return (
    <div>
      <p>Project State:</p>
      <div
        style={{ position: "relative", fontSize: "1.2rem", fontWeight: "bold" }}
      >
        {STATES.map((option, index) => (
          <p
            key={index}
            style={{
              left: 0,
              top: `${index * 1.5}rem`,
              opacity: state === option ? 1 : 0.2,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
