import { NextResponse } from "next/server";
/* import headers from "../../apiConfig";
 */
export const GET = async () => {
 /*  const response = await fetch(
    "https://pantip.com/api/forum-service/home/get_suggest_topic_popular",
    { headers }
  );
  const data = await response.json();
  console.log(data); */
  return NextResponse.json({success: true, data: []});
};
