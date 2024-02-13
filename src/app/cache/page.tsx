import { sleep } from "@/lib/utils";
import { unstable_cache } from "next/cache";

export const dynamic = 'force-dynamic'

const getTime = unstable_cache(
  async () => sleep(30).then(() => new Date().toISOString()),
  ['time-cache'],
  { tags: ['time-cache'], revalidate: 20 }
);

export default async function Page() {
  const time = await getTime();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Regional SSR with cache us-east-1 (Virginia)
      <p>Cached time: {time}</p>
    </main>
  );
}
