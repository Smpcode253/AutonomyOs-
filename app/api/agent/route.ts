
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  return new Response(
    JSON.stringify({
      status: "ok",
      message: "agent endpoint reached",
      received: body,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
