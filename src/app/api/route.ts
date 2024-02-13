import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  console.log('Revalidating tag:', tag)
  revalidateTag(tag as string)
  return Response.json({ revalidated: true, now: Date.now() })
}
