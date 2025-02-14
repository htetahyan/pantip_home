import { NextResponse } from 'next/server'
import headers from '../../apiConfig'

export async function GET() {
 
    const response = await fetch('https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3',{
      headers:headers
    })
    const data = await response.json()

    return NextResponse.json(data)
 
}
