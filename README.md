# How to set project up

1. Use `npm i` in a terminal
2. Set up a Postgres database URL in a `.env` file in the root
3. Use `npx prisma db push` to push `schema.prisma` to the Postgres database
4. Run `npm run dev`
5. Click `Reset and reseed` in devtools in the top-left corner of the screen
6. Click `Users` in devtools and then select any user.

TODO:

- []: Implement auth and verification
- []: Optimistic updating for clients
- []: Implement DSM functionality
- []: Improve component architecture
- []: Add Zod verification to incoming server action requests
