export default function handler(request, response) {
  if (request.method === 'POST') {
    const { username, password } = request.body;
    // process data
    response.status(200).json({ message: 'Data received', user: username });
  } else {
    response.status(405).json({ message: 'Method not allowed' });
  }
}