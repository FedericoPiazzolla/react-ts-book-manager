import SessionItem from "./SessionItem";

type SessionListprops = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
};

export default function SessionList({ sessions }: SessionListprops) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
}
