import { sleep } from "@/lib/utils";
import { unstable_cache } from "next/cache";

export const runtime = 'edge'

export const preferredRegion = 'gru1'

const getTime = unstable_cache(
  async () => sleep(30).then(() => new Date().toISOString()),
  ['straming-gru1'],
  { tags: ['straming-gru1'], revalidate: 20 }
);

async function CachedTime() {
  const time = await getTime();
  return <p>
    Cached time {time}
  </p>
}

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Edge Streaming SSR sa-east-1 (Sao Paulo)
      <CachedTime />
    </main>
  );
}
