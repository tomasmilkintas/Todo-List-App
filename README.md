## Vision

The aim of this project is to have a well-rounded Todo List App with users
and appropriate authentication. The tasks themselves will be linked to the
unique registered user, so that the user can manipulate only his own list of
tasks. Naturally, a database is used to store and retrieve the data.

Both the authentication and the database used here are with Firebase.

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

## Delete Firebase users

For those wanting to play around and test it out with multiple users, here's a handy snippet
of code to delete them later. Currently in the authentication section, you can delete users
only one by one, so this code circumvents that:

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
