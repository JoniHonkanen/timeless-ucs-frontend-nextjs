"use client";
import { useEffect, useState } from "react";
import MeetingMinutesComponent from "./meetingMinutes";
import RequirementsComponent from "./requirements";
import StateComponent from "./state";
import styles from "@/app/styles/dataProvider.module.css";
//import { subscribeToSSE } from "./listeners/sse";
import { pollData } from "./listeners/poller";
//import { subscribeToWebSocket } from "./listeners/webSocketComponen";

interface ProjectData {
  meeting_minutes: string;
  requirements: string[];
  state: string;
}

export default function ProjectDataWrapper() {
  const [data, setData] = useState<ProjectData | null>(null);

  //IF SSE
  useEffect(() => {
    //const unsubscribe = subscribeToSSE(setData);
    //const unsubscribe = subscribeToWebSocket(setData); 
    const unsubscribe = pollData(setData);
    return () => unsubscribe();
  }, []);
  if (!data) return <p>Loading project data...</p>;

  return (
    <div className={styles.wrapper}>
      <MeetingMinutesComponent meetingMinutes={data.meeting_minutes} />
      <div className={styles.requirementsAndState}>
        <RequirementsComponent requirements={data.requirements} />
        <StateComponent state={data.state} />
      </div>
    </div>
  );
}
