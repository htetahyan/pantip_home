import { NextResponse } from "next/server";
import headers from "../../apiConfig";
export async function GET() {
/*   const { searchParams } = new URL(request.url)
 */ const behavior = await fetch("https://pantip.com/api/forum-service/home/get_suggest_topic_behavior?tracking_code=srlzwfwEtjPmCyt7l",
      {
        method: 'GET',
        
        headers:headers,
      }
  )
  const behaviorJson = await behavior.json()
  console.log(behaviorJson)
/*   const page = parseInt(searchParams.get('page') || '1')
 */  const form=new FormData()
  form.append('type','tag')
  form.append('limit', "2")
  /* form.append('ranking_time', '1739458800')
  form.append('next_id',"3") */
  
  const response = await fetch(
    "https://pantip.com/api/forum-service/home/get_suggest_topic_popular",
    {
      method: 'POST',
      
      headers:{...headers,
        "content-type":"application/x-www-form-urlencoded"
      },
      body:form
    
    }
  );
  console.log(form)
  
  const data = await response.json();
  console.log(data);
  return NextResponse.json(data);
}
