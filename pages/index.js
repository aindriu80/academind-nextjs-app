import { React, useEffect, useState } from 'react'
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

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])

  return <MeetupList meetups={loadedMeetups} />
}

export default HomePage
