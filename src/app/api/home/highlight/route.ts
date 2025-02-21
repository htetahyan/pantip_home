import { NextResponse } from "next/server";
import headers from "../../apiConfig";

export const GET = async () => {
  const response = await fetch(
    "https://pantip.com/api/forum-service/home/get_highlight",
    { headers }
  );
  const json = await response.json();
  return NextResponse.json(json);
}
