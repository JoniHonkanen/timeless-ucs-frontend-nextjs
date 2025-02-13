"use client";

interface Props {
  meetingMinutes: string;
}

export default function MeetingMinutesComponent({ meetingMinutes }: Props) {
  return <div>Meeting Minutes: {meetingMinutes}</div>;
}
