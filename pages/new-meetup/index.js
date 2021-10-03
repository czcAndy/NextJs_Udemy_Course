import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

    const meetupHandler = (data) => {
        console.log(data);
    }

    return (
        <NewMeetupForm onAddMeetup={meetupHandler}/>
    )
}

export default NewMeetupPage;