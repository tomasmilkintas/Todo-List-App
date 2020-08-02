## Vision

The aim of this project is to have a well-rounded Todo List App with users
and appropriate authentication. The tasks themselves will be linked to the
unique registered user, so that the user can manipulate only his own list of
tasks. Naturally, a database is used to store and retrieve the data.

Both the authentication and the database used here are with Firebase.

## Technology Used For this project

-   ReactJS
-   React Hooks
-   Redux
-   ES6 Javascript
-   Firebase Realtime Database
-   Firebase Authentication
-   Storybook
-   Styled Components

## Takeaways

-   Reinforced my knowledge about ReactJS in a lot of ways
-   Great practice for redux, having a global state that is being passed around
-   Used Storybook and Figma for getting used to prototyping & using visual aspects
-   Daily evaluation helped me a lot to push this project forward

## Struggles

Initially I struggled a fair bit, because as the app got bigger and more complex
the local state started getting confusing and not working as intended. Thus the
decision to apply global state with the help of Redux originated.

Persistent data - to have the same user / task data upon refresh / logout - was a
fairly big crux of the project which also was solved by introduction of Redux.

Using Storybook & Figma was also a very new experience for me. To break things down
on a visual level and have it recreated separately from the main app.

## For those wanting to play around with this project

After you cloned and downloaded the repo, enter this in the terminal to download
and install the dependencies

```
npm install
```

Then, create .env file in your root directory. The API keys as well as other sensitive
information have been currently hidden and stored in that file.

This needs to be replaced with the config file information from Firebase.

```
REACT_APP_FIREBASE_API_KEY = " "
REACT_APP_AUTH_DOMAIN = " "
REACT_APP_DATABASE_URL = " "
REACT_APP_PROJECT_ID = " "
REACT_APP_STORAGE_BUCKET= " "
REACT_APP_MESSAGING_SENDER_ID = " "
REACT_APP_APP_ID = " "
REACT_APP_MEASUREMENT_ID = " "
REACT_APP_BASE_URL = " "
```

In order to access it, create a project, go to:
Console => Project settings => General => Config

Replace the information there with " " you see in the code above, as you don't need apostrophes in the .env file

After that is done, save and start the project locally with:

```
npm start / yarn start
```

Alternatively, if you want to play around without the aforementioned steps, access the netlify
version of it here => [Magical List](https://magical-list.netlify.app/).

## Delete Firebase users

For those who started playing around and testing it out with multiple users, here's a handy snippet
of code. Currently in the authentication section (in Firebase), you can delete users only one by one,
so this code circumvents that by selecting and deleting multiple users at the same time:

```
let intervalId;

let clearFunction = function() {
  let size = $('[aria-label="Delete account"]').size();
  if (size == 0) {
    console.log("interval cleared");
    clearInterval(intervalId);
    return;
  }
  let index = Math.floor(Math.random() * size);
  $('[aria-label="Delete account"]')[index].click();
  setTimeout(function () {
     $(".md-raised:contains(Delete)").click()
  }, 1000);
};

intervalId = setInterval(clearFunction, 300);
```

In order to use it, copy the text above and paste it into the developer tools console,
when you are at your authentication section. This code will select users one by one and
run until the list is empty.

## Storybook

For this project I started using Storybook to achieve a cleaner and a more consice architecture.
Basically it allows you to break down the reusable components into little chunk and give you your
own mini visual library for each component irrespective of where the app itself is at that point.

To get it running, paste this in the terminal:

```
npx -p @storybook/cli sb init --type react
```

followed by:

```
yarn storybook
```

For more information visit the official [site](https://storybook.js.org/docs/basics/introduction/).
