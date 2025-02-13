"use client";

interface Props {
  requirements: string[];
}

export default function RequirementsComponent({ requirements }: Props) {
  return (
    <div>
      <div>Requirements:</div>
      <ul>
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
}
