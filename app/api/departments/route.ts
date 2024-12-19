const API_URL = 'http://localhost:3004/departments';

export async function GET() {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 60,
    },
  });
  const departments = await response.json();
  return new Response(JSON.stringify(departments));
}
