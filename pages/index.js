import Head from 'next/head'
import { MongoClient } from 'mongodb'

import { Fragment, React } from 'react'

import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'New York',
//     image: './img/photo-1500916434205-0c77489c6cf7.webp',
//     address: 'Lower Manhattan',
//     description: 'This is the initial meetup!!',
//   },
//   {
//     id: 'm2',
//     title: 'Chicago',
//     image: './img/photo-1629902040617-f58a5a15797c.webp',
//     address: 'Chicago, Chicago',
//     description: 'This is the second meetup!!',
//   },
// ]

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetup App</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    'mongosh "mongodb+srv://user:academind-nextjs-app@cluster0.2ckgy.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // key: meetup.key,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 100,
  }
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

export default HomePage
