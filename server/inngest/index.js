import { Inngest } from "inngest";
// create a client to send and receive events
export const inngest = new Inngest({id:"movie-ticket-booking"});

// Inngest function to save user Data to a database
const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async({event}) => {
        const {id, first_name, last_name, email_addresses, image_url} = event.data // Fixed: first_anme → first_name
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name, // Fixed: firstname → first_name
            image: image_url // Fixed: immage → image
        }
        await User.create(userData)
    }
)

// Inngest function to delete user from database
const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-from-clerk'},
    {event: 'clerk/user.deleted'},
    async({event}) => {
        const {id} = event.data
        await User.findByIdAndDelete(id)
    }
)

// Inngest function to update user data in database
const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'}, // Fixed: Changed ID to be unique
    {event: 'clerk/user.updated'},
    async({event}) => {
        const {id, first_name, last_name, email_addresses, image_url} = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name, // Fixed: firstname → first_name
            image: image_url // Fixed: immage → image
        }
        await User.findByIdAndUpdate(id, userData)
    }
)

// create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];