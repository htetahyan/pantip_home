import { NextResponse } from "next/server";
import headers from "../../apiConfig";
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  
  const response = await fetch(
    "https://pantip.com/api/forum-service/home/get_suggest_topic_popular",
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        type: 'tag',
        limit: 2,
        ranking_time: Math.floor(Date.now() / 1000),
        next_id: (page - 1) * 2 + 1
      })
    }
  );
  
  
  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}
