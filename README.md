# Spica Profile Flag Server

The server for the profile flags introduced in Spica 0.9.1 beta 16

## What even is this?

Wow, good question. It's a thing. And I actually don't know why I added it.
Essentially, it just shows a colored ring around your profile picture in Spica.
There are multiple rings with more coming soon (probably).
You can find all current flags [here](utils/allowedRings.json).

## How to use it

There are only 2 endpoints (well technically 3 because there's `/` but idc about that).

- GET `/:id`
  - Description: Get the profile ring for a user.
  - URL parameters:
    - `id`: UID of the user
  - Headers: ---
  - Body: ---
  - Responses:
    - 400 "badRequest": the id isn't a string
    - 404 "missingResource": there's no database entry for this user
    - 200:
      - "uid": UID of the user
      - "ring": Ring/Flag that the user selected
      - "createdAt": Don't worry about that, it's just when the database entry got created
- POST `/:id`
  - Description: Update the profile ring for a user.
  - URL parameters:
    - `id`: UID of the user
  - Headers:
    - "Authorization": Token that alles uses for authorization (used to make a request to `https://micro.alles.cx/api/me`)
  - Body (JSON):
    - "ring": any ring from the allowed [ring/flags list](utils/allowedRings.json)
  - Responses:
    - 401 "badAuthorization": The token is invalid or isn't for the user with the UID `id`
    - 400 "badRequest": `id` or `ring` is missing | ring isn't part of the allowed ring list
    - 401 "notAllowed": you tried to select the "supporter" ring but you're not part of the ["spicaCredits" list](utils/spicaCredits.json)
    - 200:
      - "uid": UID of the user
      - "ring": Ring/Flag that the user selected
      - "createdAt": Don't worry about that, it's just when the database entry got created
      
## Contributing

I'm too lazy to add a description or file for how to contribute now, just be nice to everyone and don't try to add some stupid shit.
**Please do not try to add yourself to the credits list if you're not credited in Spica.**

## Questions

If you have any questions, feel free to contact me on [twitter](https://twitter.com/leabmgrt) or open an issue.

## License

The project is licensed under the MIT license. Please refer to the [LICENSE](LICENSE) file for more information
