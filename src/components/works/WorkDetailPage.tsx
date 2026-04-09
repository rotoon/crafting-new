// PLACEHOLDER - will be replaced in Task 3
import type { WorkDetail } from "./data";
type Props = { work: WorkDetail };
export default function WorkDetailPage({ work }: Props) {
  return <div style={{ color: "white", padding: "100px" }}>{work.client} - coming soon</div>;
}
