import { React } from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'New York',
    image: './img/photo-1500916434205-0c77489c6cf7.webp',
    address: 'Lower Manhattan',
    description: 'This is the initial meetup!!',
  },
  {
    id: 'm2',
    title: 'Chicago',
    image: './img/photo-1629902040617-f58a5a15797c.webp',
    address: 'Chicago, Chicago',
    description: 'This is the second meetup!!',
  },
]

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />
}

export function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  }
}

export default HomePage
