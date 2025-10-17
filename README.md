## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)

## Running Locally

1. **Clone the repo**

git clone https://github.com/Kessi-ux/profile_endpoint.git

2. **Install dependencies**
npm install

3. **Create a .env file in the root directory**

**Add the following environment variables:**

PORT=3000
EMAIL
NAME
STACK

4. **Start the server**
npm start

5. **Test your API using**

http://localhost:3000/me


## Running in Production (Railway)

1. **Push your code to GitHub.**

2. **Create a project on Railway and connect your GitHub repository.**

3. **Add environment variables on Railway under the Variables tab:**

Key	Value
PORT	3000
EMAIL	
NAME
STACK	

4. **Railway will automatically build and deploy your app.**

5. **Your deployed URL will be similar to:**

https://profileendpoint-production.up.railway.app/me