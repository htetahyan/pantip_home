import headers from "../../apiConfig";

export const GET = async () => {
  const response = await fetch(
    "https://pantip.com/api/forum-service/home/get_suggest_topic_popular",
    { headers }
  );
  return response;
};
