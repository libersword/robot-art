Welcome Ali and whomever else may be reviewing this!

<img src="https://media.giphy.com/media/tczJoRU7XwBS8/giphy.gif" width="480" height="360" />

Thank you for taking the time to review my project submission. Always more to do, but I'm happy to put my best foot forward. Below are my very simple instructions, and also an overview of what I was able to get done in the amount of time given.

This is not deployed and only runs locally.

To run is simple. Please fork and clone. Install the dependencies by running 'npm install" in your terminal and that will grab the dependencies from the package.json. Then a simple npm start will do the trick. 

I highly suggest opening the console while running the applications, there are comments for functionality happening that is not reflecting in the end-user experience.

What I was able to do: 

<img src="https://media.giphy.com/media/mIZ9rPeMKefm0/giphy.gif" />

1. Login. You can log in with the seeded admin. It creates a session and redirects you to the robot page.
2. Register. You can successfully register. However you have to login to afterwards to start a under that user.
3. See all the robots. Someitmes on first log in it hits your with a 500 server error. Reloading it should work.
4. Vote! Passes the vote through, deletes the current vote and changes it to the new vote when a new vote is selected. 
5. Logout.

What I was not able to do: 

<img src="https://media.giphy.com/media/EizPK3InQbrNK/giphy.gif" />

1. Biggest shortfall was the admin. I ran out of time to make a fully function admin panel with a robot upload, edit and delete. I hid it from the main navigation but the skeleton can be viewed /admin route.
2. Second shortfall was the results. I don't have much in the way of showing the results of the votes cast. Got caught up very much in user authentication.
3. Vote state does not persist. I did not set up a check to pull the voteID associated with the user from the API to set into localstorage when loading in the robots and voting. I have a good idea of how I would do it. Checking postman there is also some issue with the vote and the user id associated with it. Will just take a look at it after submitting.
4. UX and front-end reflection. Was not able to yet disable button on vote and show the user that their response was submitted.
5. Design: did not make a hamburger navgation for mobile.

Thank you again for your time and consideration.

<img src ="https://media.giphy.com/media/RKLaxLVYKF904/giphy.gif" />
