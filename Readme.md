
# Enterprise Cloud Service Catalog

## Project Description
A Node.js web application built using Express.js that provides a Cloud Service Catalog interface and two JSON API endpoints.

## Technologies Used
- Node.js
- Express.js
- HTML and CSS
- Vercel
- GitHub

## API Endpoints
- `/api/services` - Returns a list of cloud services.
- `/api/status` - Returns application health information.

## Running Locally

1. Install dependencies:
   npm install

2. Start the application:
   npm start

3. Open http://localhost:8080

## Port Configuration

During local development, the application uses port 8080 as its default port. This makes the website accessible at http://localhost:8080 on the developer's computer. The server code uses process.env.PORT || 8080, which means it first checks whether the hosting environment has supplied a PORT value. If one exists, the application uses that value; otherwise, it uses 8080. In production, Vercel manages the deployment environment and routes requests to the Express application using its platform infrastructure. Developers should not assume that the production application will use local port 8080. This configuration supports local development and cloud deployment.
