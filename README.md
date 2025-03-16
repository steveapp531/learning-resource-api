
# Learning Resource API

## Endpoints Overview

### 1. **Register a User**
- **URL**: `POST /api/auth/register`
- **Request Body**:
  ```json
  {
    "name": "stephen appiah",
    "email": "captain@techtrek.com",
    "password": "secure123"
  }
  ```
- **Response**:
  - Status: `201 - Created`
  - Example:
    ```json
    { "message": "" }
    ```

### 2. **Login and Get Token**
- **URL**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "captain@techtrek.com",
    "password": "secure123"
  }
  ```
- **Response**:
  - Status: `200 - OK`
  - Example:
    ```json
    {
      "message": "Login successful",
      "token": "your-jwt-token"
    }
    ```

### 3. **Add a Learning Resource**
- **URL**: `POST /api/resources`
- **Headers**:
  - `Authorization: Bearer <your-jwt-token>`
- **Request Body**:
  ```json
  {
    "user": "67d6e51345eb345a35de47cf",
    "title": "leadership and followership",
    "url": "https://www.example.org/expressjs-course",
    "category": "Course",
    "completed": true
  }
  ```
- **Response**:
  - Status: `201 - Created`
  - Example:
    ```json
    {
      "user": "67d6e51345eb345a35de47cf",
      "title": "leadership and followership",
      "url": "https://www.example.org/expressjs-course",
      "category": "Course",
      "completed": true,
      "_id": "unique-id",
      "createdAt": "timestamp",
      "updatedAt": "timestamp",
      "__v": 0
    }
    ```

### 4. **Get All Learning Resources**
- **URL**: `GET /api/resources`
- **Headers**:
  - `Authorization: Bearer <your-jwt-token>`
- **Response**:
  - Status: `200 - OK`
  - Example:
    ```json
    [
      {
        "_id": "unique-id",
        "user": "67d6e51345eb345a35de47cf",
        "title": "leadership and followership",
        "url": "https://www.example.org/expressjs-course",
        "category": "Course",
        "completed": true,
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "__v": 0
      }
    ]
    ```

### 5. **Delete a Learning Resource**
- **URL**: `DELETE /api/resources/:id`
- **Headers**:
  - `Authorization: Bearer <your-jwt-token>`
- **Response**:
  - Status: `200 - OK`
  - Example:
    ```json
    { "message": "Resource deleted successfully" }
    ```

---

### **Important Notes**:
- Replace `<your-jwt-token>` with the token you receive after logging in.
- Use Postman to send requests with the correct headers and body.