import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <MeetupDetail
      image="./img/photo-1500916434205-0c77489c6cf7.webp"
      title="First Meetup"
      address="Some Street by Some City"
      description="This is the first meetup"
    />
  )
}
export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId

  console.log(meetupId)

  return {
    props: {
      meetupData: {
        image: './img/photo-1500916434205-0c77489c6cf7.webp',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street by Some City',
        description: 'This is the first meetup',
      },
    },
  }
}
export default MeetupDetails
