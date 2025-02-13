
/* export const GET  = async () => {
   return NextResponse.json({message: "Hello World!"})
} */
const headers = {
    "authority": "pantip.com",
    "method": "GET",
    "path": "/api/forum-service/home/get_tag_hit?limit=10",
    "scheme": "https",
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "if-none-match": 'W/"5bb-mdLTKzqEHzlLjyMhV0UIETnNnQM"',
    "priority": "u=1, i",
    "ptauthorize": "Basic dGVzdGVyOnRlc3Rlcg==",
    "referer": "https://pantip.com/",
    "sec-ch-ua": '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
   , "cookie": `${process.env.COOKIE}`
  };
  
  export default headers;
  