import { notFound } from "next/navigation";
import WorkModal from "@/components/works/WorkModal";

import { WORK_DETAILS } from "@/components/works/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WorkModalPage({ params }: Props) {
  const { slug } = await params;
  const work = WORK_DETAILS.find((w) => w.id === slug);
  if (!work) notFound();

  return <WorkModal work={work} />;
}
