# Slot machine

Unveil pre-made teams with a slot machine effect, mimicking randomness.

![Slot machine](/screenshot.jpg?raw=true)

## install
`npm install` and `jspm install`

## running

You need to create a `teams.json` in the root folder with the following structure:

```json

{
  "teams": [
    {
      "name": "Team 1",
      "members": [
        {
          "firstName": "Member",
          "surname": "One"
        },
        {
          "firstName": "Member",
          "surname": "Two"
        }
      ]
    },
    {
      "name": "Team 2",
      "members": [
        {
          "firstName": "Member",
          "surname": "One"
        },
        {
          "firstName": "Member",
          "surname": "Two"
        }
      ]
    }    
  ]
}

```

Depending on the width of your screen, team members up to a count of 6 should still be doable.

Then:

`npm run dev` and visit [localhost:8080](http://localhost:8080)

### controls
You can use the left and right arrows to click through teams. An ENTER should start
the slot machine. You can also just click the shown < > buttons and slot machine's one arm.

## deployment

`npm run build`  and visit [localhost:8080/build.html](http://localhost:8080/build.html)

Deploy the following:

```

build.html (which you can rename to index.html of course)
teams.json

build/
css/
img/
sounds/


```