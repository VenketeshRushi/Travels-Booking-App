
import authorization from '../../middleware/authorization';

const handler = (req, res) => {
  // your API route logic here
};

export async function GET(request) {
  return new Response('Hello, Next.js!')
}

export default authorization(handler);
