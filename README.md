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

## Todo: features

- Verify user token;
- After login allow the user to submit a bid;
- Show logged in clients bidding updates on `/dashboard`;