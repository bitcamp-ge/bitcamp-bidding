<h1 align="center">
    <img src="./public/img/minicamp.webp" width=48 height=48>
</h1>

# BitCamp bidding
Bidding webpage for BitCamp's new course(s).

## Running the code

1. Clone the GitHub repository:
    ```obviously
    $ git clone https://github.com/bitcamp-ge/bitcamp-bidding
    ```

0. Move into the directory and install npm packages:
    ```shell
    $ cd ./bitcamp-bidding
    $ npm install
    ```

0. Generate prisma client:
    ```shell
    $ npx prisma generate
    ```

0. Apply prisma migrations for development:
    ```shell
    $ npx prisma migrate dev
    ```

0. Run the server:
    ```shell
    $ npm start
    ```

<h1 align="center">
    <img src="./public/img/nodejs.png" width=64 height=64>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="./public/img/prisma.png" width=64 height=64>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="./public/img/javascript.png" width=64 height=64>
</h1>

## Tech stack

- **Node.js**
- **Express.js** - Handle HTTP server and routing;
- **Socket.IO** - Manage real-time communication;
- **Prisma** - Interface with the database;
- **dotenv** - Managing environment variables;

## Working features

- Logging into your account, obtaining token;
- Initial socket connection code for live updates;
- Working endpoints (`/`, `/login`, `/dashboard`);
- After login allow the user to submit a bid;
- Show logged in clients bidding updates on `/dashboard`;

## Todo: features

- Verify user token;
- Better design!

<br><br><h5 align="center">✊ სწავლა და ბრძოლა 🔥</h5>
<!-- Dont mind the decorations :p -->