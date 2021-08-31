// /api/new-meetup
// POST /api/new-meetup

function handler(res, req) {
  if (req.method === 'POST') {
    const data = req.data

    const { title, image, address, description } = data
  }
}
export default handler
