# Next.js Full Stack Starter Template

👋🏿 Hi! I’m Yeabsra, a web and mobile developer from Ethiopia. I’ve put together my preferred tech stack and starter template for a Next.js full stack project. It includes Next.js, Mongoose, Zod, Shadcn, Tailwind, and NextAuth, using pnpm. Feel free to use it if you want. Let’s connect and create something awesome together!

## Tech Stack

- **Next.js**: The React framework for production.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Zod**: TypeScript-first schema declaration and validation library.
- **Shadcn**: Custom UI components for Shadcn.
- **Tailwind CSS**: A utility-first CSS framework.
- **NextAuth**: Authentication for Next.js.
- **pnpm**: Fast, disk space efficient package manager.

## Getting Started

To get started with this template, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yeabnoah/technerd_NextJs_starter_template.git
    cd technerd_NextJs_starter_template
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Set up environment variables:**

    change the `.env.example` to `.env.local` file in the root of your project and uncomment and the following environment variables:

    ```bash
    # MongoDB connection string use the guide in the file to setup and link to your database either local or Atlas project
    MONGODB_URI=your_mongodb_uri

    # NextAuth configuration
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000

    # Other environment variables
    ```

4. **Run the development server:**

    ```bash
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

Here's an overview of the project structure:
<pre>

├── app
    ├── api
        ├── auth
├── components   # Reusable UI components
├── lib          # Library code also Mongoose connection with NextJS
├── models       # Mongoose models
├── public       # Public assets
├── utils        # Utility functions
├── .env.local   # Environment variables / change the env.example to env.local
        
      </pre>

## Check

check yourBaseUrl/api/user with `GET` and `POST` request on postman to validate the DBconnection and api is working 

### Authentication

This template uses NextAuth for authentication. You can configure different authentication providers in `pages/api/auth/[...nextauth].ts`.

### Database

Mongoose is used for MongoDB interaction. Define your Mongoose models in the `models` directory.

### Validation

Zod is used for schema validation. You can define your schemas and use them to validate data throughout your application.

## Contributing

Feel free to submit issues and pull requests. Let's improve this template together!

## Connect with Me

Let’s connect and create something awesome together! You can reach me at:

- **Email**: [yeabnoah5@gmail.com](mailto:yeabnoah5@gmail.com)
- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/yeabsra-ashebir-tech-nerd-8a3a80267/)
- **GitHub**: [Github](https://github.com/yeabnoah)
- **Telegram** [telegram](https://t.me/technerd345)

---

Happy coding! 🎉
