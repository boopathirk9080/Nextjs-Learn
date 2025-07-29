import { NextRequest, NextResponse } from "next/server";

// Route Handler get an json data
export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");
  console.log("type:", type);
  return NextResponse.json([
    { title: "Redmi Mobiles" },
    { title: "Samsung Mobiles" },
  ]);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({
    message: "Post success",
  });
}

// export async  function GET() {
//   return new Response("test");
// }
