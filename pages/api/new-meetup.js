import { MongoClient } from 'mongodb'
// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body

    const client = await MongoClient.connect(
      'mongosh "mongodb+srv://user:academind-nextjs-app@cluster0.2ckgy.mongodb.net/meetups?retryWrites=true&w=majority'
    )
    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({ message: 'Meetup inserted ok' })
  }
}
export default handler
