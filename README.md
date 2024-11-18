Setup Instructions
**1. Clone the Repository**
git clone https://github.com/PruthviAsadi/EZ-Works-Assignment
cd EZ-Works-Assignment

**2. Install Dependencies**
npm install

**3. Initialize Database**
The database is automatically initialized on the first run. Check the config/db.js file for schema setup.

**4. Start the Server**
node app.js
The server will start at http://localhost:3000.

**API Endpoints and Testing**
**1. Client User: Sign Up**
Endpoint: POST /client/signup
Request Body (JSON):
{
  "email": "client@example.com",
  "password": "securePassword"
}
Response:
{
  "encryptedUrl": "http://localhost:3000/client/verify-email?token=..."
}

**2. Verify Email**
Endpoint: GET /client/verify-email?token=<token>
Replace <token> with the token received during signup.
Response:
{
  "message": "Email verified successfully"
}

**3. Client User: Log In**
Endpoint: POST /client/login
Request Body (JSON):

{
  "email": "client@example.com",
  "password": "securePassword"
}
Response:

{
  "token": "JWT_TOKEN"
}

**4. Ops User: Log In**
Manually insert an Ops user into the database:
sql
INSERT INTO users (email, password, role) VALUES ('ops@example.com', '<hashed_password>', 'Ops');
Replace <hashed_password> with a bcrypt-hashed password.
Endpoint: POST /client/login
Request Body (JSON):

{
  "email": "ops@example.com",
  "password": "securePassword"
}

**5. Ops User: Upload File**
Endpoint: POST /ops/upload
Add JWT token in the Authorization Header:
Type: Bearer Token
Value: <JWT_TOKEN>
Go to the Body tab in Postman:
Select form-data.
Add a key: file (type: File).
Upload a file (.pptx, .docx, or .xlsx).
Response:
{
  "message": "File uploaded successfully"
}

**6. Client User: List Files**
Endpoint: GET /client/files
Add JWT token in the Authorization Header:
Type: Bearer Token
Value: <JWT_TOKEN>
Response:
[
  {
    "id": 1,
    "filename": "example.pptx",
    "uploaderId": 2
  },
  ...
]

**7. Client User: Download File**
Endpoint: GET /client/download/:fileId
Replace :fileId with a valid file ID from the list files response.
Add JWT token in the Authorization Header:
Type: Bearer Token
Value: <JWT_TOKEN>
The file will download directly.
