# StampMarket Frontend

This is the frontend repository for the StampMarket project. StampMarket is a web application built with Vue.js and Vite.

## Live Preview
The site is host on vercel.  
To preview, visit https://stamp-market-frontend.vercel.app/

## Project setup
### For production
To build the project for production, run the following command:
1. Build docker image
```bash
docker buildx build -t shop-demo:v1 .
```

2. Run docker image
```bash
docker run -d -p 3002:80 shop-demo:v1
```

3. Visit `http://localhost:3002` to see the application running.
### For development
To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/StampMarket-frontend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd StampMarket-frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and visit `http://localhost:3000` to see the application running.


## Build

To build the project for production, run the following command:
