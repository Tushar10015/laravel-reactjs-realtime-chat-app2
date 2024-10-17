# Laravel React Chat Application

## Overview

This is a real-time chat application built with **Laravel** as the backend and **React.js** as the frontend. It uses **Pusher** and **Laravel Echo** to enable real-time message broadcasting with WebSockets. The user interface is designed using **Tailwind CSS** for responsive styling and **Ant Design** for UI components.

## Features

-   **Real-time Messaging**: Users can send and receive messages instantly without refreshing the page.
-   **WebSockets with Pusher**: Leveraging Laravel Echo and Pusher for broadcasting events over WebSockets.
-   **Responsive UI**: Built with Tailwind CSS for modern, responsive design, and Ant Design for structured layouts.
-   **Sender/Receiver Interface**: Messages are clearly separated for easy identification of the sender and receiver.
-   **API Communication**: Frontend communicates with the backend via RESTful APIs using Axios.

## Technologies Used

-   **Laravel 10**: Backend framework
-   **React.js**: Frontend framework
-   **Pusher**: WebSocket service for real-time functionality
-   **Laravel Echo**: Laravel's real-time event broadcasting library
-   **Tailwind CSS**: Utility-first CSS framework for styling
-   **Ant Design (antd)**: React UI library for elegant and responsive layouts
-   **Axios**: Promise-based HTTP client for API communication
-   **PHP**: Backend language (Laravel)
-   **Node.js**: JavaScript runtime (React frontend)
-   **Composer & npm**: Dependency managers for Laravel and React respectively

## Prerequisites

To run this project locally, ensure you have the following installed:

-   **PHP >= 8.0**
-   **Composer**
-   **Node.js >= 14.x**
-   **NPM or Yarn**
-   **Pusher Account** (for WebSocket broadcasting)
-   **Laravel and React development environments set up**

## Installation

### Backend (Laravel)

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/laravel-react-chat.git
    cd laravel-react-chat
    ```

2. Install Laravel dependencies:

    ```bash
    composer install
    ```

3. Configure environment variables:
   Copy the `.env.example` file to `.env` and fill in your database and Pusher credentials.

    ```bash
    cp .env.example .env
    ```

    Update the `.env` file with your Pusher credentials:

    ```env
    PUSHER_APP_ID=your_pusher_app_id
    PUSHER_APP_KEY=your_pusher_app_key
    PUSHER_APP_SECRET=your_pusher_app_secret
    PUSHER_APP_CLUSTER=your_pusher_app_cluster
    ```

4. Run migrations (optional if using a database):

    ```bash
    php artisan migrate
    ```

5. Start the Laravel development server:
    ```bash
    php artisan serve
    ```
    The backend will be available at `http://127.0.0.1:8000`.

### Frontend (React)

1. Navigate to the frontend directory:

    ```bash
    cd chat-frontend
    ```

2. Install React dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```
    The frontend will be available at `http://localhost:3000`.

## Usage

1. Open the frontend (`http://localhost:3000`) in two different browser windows or tabs.
2. Send a message from one tab, and you should see the message appear in real-time in both tabs.
3. Messages are broadcasted instantly using WebSockets powered by Pusher.

## Project Structure

### Backend (Laravel)

-   **`app/Events/MessageSent.php`**: Event class for broadcasting messages.
-   **`app/Http/Controllers/ChatController.php`**: Controller to handle sending messages.
-   **`routes/api.php`**: Defines the route for sending messages (`/api/send-message`).

### Frontend (React)

-   **`src/App.js`**: Main application file that initializes the React components, Laravel Echo, and WebSocket connections.
-   **`src/components/Chat.js`**: Chat window component handling message input and display.

## Troubleshooting

-   **WebSocket Connection Failed**: Ensure your Pusher credentials in the `.env` file and the cluster configuration in the frontend are correct.
-   **Broadcasting Not Working**: Clear the Laravel config cache and restart the server:
    ```bash
    php artisan config:clear
    php artisan cache:clear
    php artisan serve
    ```

## Future Improvements

-   **Authentication**: Add user authentication to support private or group chats.
-   **Message History**: Save and retrieve past messages from the database.
-   **Typing Indicators**: Implement a feature to show when the other user is typing.
-   **File Sharing**: Extend the functionality to support file sharing in chat.
