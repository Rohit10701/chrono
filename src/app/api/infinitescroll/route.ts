export async function GET(request: Request) {

  const searchParams = new URL(request.url).searchParams;
  const page = searchParams.get('page');
  const itemsPerPage = searchParams.get('itemsPerPage');

  
  const newContainer = Array.from({ length: parseInt(itemsPerPage as string, 10) }, (_, index) => ({
    id: parseInt(page as string, 10) * parseInt(itemsPerPage as string, 10) + index,
    text: `Option ${parseInt(page as string, 10) * parseInt(itemsPerPage as string, 10) + index}`,
  }));

  return new Response(JSON.stringify({ newContainer, newPage: parseInt(page as string, 10) + 1, newHasMore: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
