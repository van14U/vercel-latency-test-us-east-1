import { sleep } from "@/lib/utils";
import { unstable_cache } from "next/cache";

export const runtime = 'edge'

export const preferredRegion = 'iad1'

const getTime = unstable_cache(
  async () => sleep(30).then(() => new Date().toISOString()),
  ['time-cache-edge-iad1'],
  { tags: ['time-cache-edge-iad1'], revalidate: 20 }
);

export default async function Page() {
  const time = await getTime();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Edge SSR us-east-1 (Washington DC)
      <p>Cached time {time}</p>
    </main>
  );
}
