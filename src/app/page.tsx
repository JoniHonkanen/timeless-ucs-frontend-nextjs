import Image from "next/image";
import styles from "./styles/page.module.css";
import WebSocketComponent from "./components/listeners/webSocketComponen";
import SSEComponent from "./components/listeners/sse";
import PollingComponent from "./components/listeners/poller";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Image src="/images/TimeLess.png" alt="Logo" width={200} height={100} /> */}
        <div>
          <WebSocketComponent />
          {/* <SSEComponent /> */}
          {/* <PollingComponent /> */}
        </div>
      </main>
      <footer className={styles.footer}>
        <div>FOOTER</div>
      </footer>
    </div>
  );
}
