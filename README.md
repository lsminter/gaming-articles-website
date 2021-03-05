# Gaming Articles Website

The purpose of the Gaming Articles Website is to give gamers a place to write their own articles and display them to other users. Here, gamers can start conversations around any topic one might present. 

## User Profiles

I'd like for users to be able to have their own dashboard where they can edit their own articles and have a small bio about themselves. On the profile page, there will be a list of all of the users articles that they have written if they are saved and their own written articles if they are paid users. 

## Free Users
Users will also be able to follow other users to see when they post an article. Free users will be able to save articles and view but not comment or write articles. 

## Premium Accounts
These accounts will be the only ones that are allowed to comment and write articles. 

## Next.js, Stripe, Firebase
This application will be built on Next.js for the front end. Stipe will handle the payment side of things. Firebase will be used for user authentication. I'd like to learn more about using Tailwindcss. I'm unsure what to use for storing data. dynamodb?

## Rabbit Holes
Adding in too many features. I should keep it small initially and just have the basic stuff, profile name and the option to change their password. Not going too in depth for user profiles and leave out the comments section for now. Being able to follow or view who someone follows. 

## Notes
This is pretty basic so far. These are just some initial thoughts as to what I want the site to be. As the application is build out, I would like to add images of different parts such as the sign in process and some basic templates for articles/profiles. 

It's hard to figure out what to do for paid users. Maybe paying users are the only ones that can write articles and comment? 

I think the initial things to work on is just some simple UI. The next step after that would probably to create a way to log in, then implement authentication into that. 

- [ ] Make a simple login page for users with just an input for username and password.

- [ ] Implement authentication via Firebase
 

## Start the Server

Run `yarn` to install the dependencies.

Run `yarn dev` to start the server on `http://localhost:3000`. 