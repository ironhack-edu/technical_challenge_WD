
## what happened here

-I read and understood the task. I started confident becaus I notice I have done this a couple of times already, during the bootcamp. I might be alright. 

-I forked and cloned the repo on my VSC

-I noticed the repo missed the most basic files we have been receiving as a starting point during the bootcamp so I started thinking about what to install and how to start creating the necessary structure. 

-I run npm install but it didnt install dependencies.

- I try to find how to install node, express, react separately. The terminal gives me errors. not working. cant find the install npm ??

-I started looking for the basic npx ironlauncher in the students' portal in order to set up the files that way? 

-I realized that as soon as I run the ironlaucher, it creates another directory within the cloned directory adn its a "server". I assumed this is not going to work but now I have another doubt... do they want me to create two repos (client/server)? Nah. No. it cant be.

-after 1 hour of back and forth with this. I started searching on the internet how to install express, node and react on the internet. 
for some reason, the terminal kept on giving me errors.

-I tried copy pasting some content from the original clone into a newly created directory in order to pass the json conten to another directory and work there. It didnt work.

-I checked the video solution to the challenge, as provided in the exercise: They still dont explain how to install so that my directory has the same files and installations in package.json. 

- I managed to install express and node but, for some reason, everything installs in the package-lock.json, instead of in the package.json file. nto going to work, I guess. I try installing react. create-react-app .... but wait a minute, this also creates another directory inside the given directory. 

-I ended up deleting the cloned directory from my computer with the intention of starting again from scratch, only to be reminded that, of course I cant fork more than once from my own account.

-I created this new account on Github (seriously?!), only to fork again and start clean. 
- when pushing I noticed that , of course, my git is not connected to this new github account so I cant push so I retrieved this directory from the bin (!)

-I started this whole process at 10. 

I quitted, utterly frustrated, at 13.25. Coded nothing. I couldnt even set up the Directory to start the job.

This is ridiculous. I am not ready for the job market. I am ready to start the bootcamp all over again.








# The Phone Cave (WD)

  At The Phone Cave we are looking for someone to help us turn our cave store into a home, and to do so we present you this challenge.

## The challenge (Duration: 3 hours)

Your task consists of creating an app showing our catalog. Follow the steps detailed below to complete the task. **You have 3 hours to do so.**

### Iteration #1

Create a REST API (NodeJS) server that meets the following requirements:


| Route                 | HTTP Verb | Description    |
| --------------------- | --------- | -------------- |
| `/phones`             | GET       | Show all phones (use the `phones.json`) as fake data |
| `/phones/:id`         | GET       | Show a phone details|


### Iteration #2

Create a React application that communicates with the API you created before. Your React app should be using the **hooks** approach.
- Use Axios (or a similar library) in order to obtain data from the REST API
- Show a list with all the phones
- When a phone model is selected from the list, a detailed view of the phone is shown with a few specific details displayed. This display should be on the same page than the list of phones. 
- Show a spinner component or a position marker while the API request is processing (display a simulation if there is no loading time)

### Iteration #3

Make it look **eye-appealing**. There is no need to develop a sophisticated design, but it should not look terrible when viewed from a phone. Add images of each device.

Once done with this, do a pull request to submit your work. 


## Deadline

You have three hours to work on this challenge.
In the event that after three hours you do not have the MVP objectives ready, send the pull request indistinctly. This is a speed challenge.

## Must-have Deliverables

- Functioning code (server and client side)
- Short README file describing what is the app about and add instructions on how to use it.
 
