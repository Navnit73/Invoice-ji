
# 🧾 Invoice Manager App – Authentication API Docs

> Base URL: `https://api.invoiceji.com/api/auth`

---

## 📘 Overview

This API handles user authentication and account management for **Invoice Ji**, including:
- User registration & login  
- Password reset  
- Token-based authentication  
- Plan management (Free & Premium)  
- Accessing authenticated user profile  

All responses are in **JSON** format.

---

## 🧑‍💻 1. User Registration

### **Endpoint**
POST /register

### **Request Body**
{
  "name": "Navnit Rai",
  "email": "navnit@example.com",
  "password": "StrongPassword123",
  "business_name": "Invoice Ji",
  "plan": "free"
}

### **Response**
{
  "status": "success",
  "message": "User registered successfully.",
  "user": {
    "id": "674829ba12ff9431f45ab012",
    "name": "Navnit Rai",
    "email": "navnit@example.com",
    "business_name": "Invoice Ji",
    "plan": "free",
    "template_id": null,
    "is_premium": false,
    "created_at": "2025-11-10T12:00:00Z"
  },
  "auth": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "token_type": "bearer",
    "expires_in": 3600
  }
}

---

## 🔐 2. User Login

### **Endpoint**
POST /login

### **Request Body**
{
  "email": "navnit@example.com",
  "password": "StrongPassword123"
}

### **Response**
{
  "status": "success",
  "message": "Login successful.",
  "user": {
    "id": "674829ba12ff9431f45ab012",
    "name": "Navnit Rai",
    "email": "navnit@example.com",
    "business_name": "Invoice Ji",
    "plan_id": "premium",
    
    "template_id": "TEMPLATE_03",
    "is_premium": true
  },
  "auth": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
    "token_type": "bearer",
    "expires_in": 3600
  }
}

---

## ✉️ 3. Forgot Password

### **Endpoint**
POST /forgot-password

### **Request Body**
{
  "email": "navnit@example.com"
}

### **Response**
{
  "status": "success",
  "message": "Password reset link sent to your email."
}

---

## 🔁 4. Reset Password

### **Endpoint**
POST /reset-password

### **Request Body**
{
  "token": "reset_token_123",
  "new_password": "NewStrongPassword456"
}

### **Response**
{
  "status": "success",
  "message": "Password reset successful. Please login again."
}

---

## 👤 5. Get Authenticated User

### **Endpoint**
GET /me

### **Authorization**
Bearer Token Required:  Authorization: Bearer <access_token>

### **Response**
{
  "status": "success",
  "user": {
    "id": "674829ba12ff9431f45ab012",
    "name": "Navnit Rai",
    "email": "navnit@example.com",
    "business_name": "Invoice Ji",
    "plan": "premium",
    "template_id": "TEMPLATE_03",
    "is_premium": true,
    "subscription": {
      "plan_name": "Pro Monthly",
      "start_date": "2025-11-01T00:00:00Z",
      "end_date": "2025-12-01T00:00:00Z",
      "active": true
    },
    "created_at": "2025-10-15T10:00:00Z",
    "last_login": "2025-11-10T11:45:00Z"
  }
}

---

## 💳 6. Upgrade Plan

### **Endpoint**
POST /upgrade

### **Request Body**
{
  "user_id": "674829ba12ff9431f45ab012",
  "plan": "premium",
  "payment_id": "PAY12345678"
}

### **Response**
{
  "status": "success",
  "message": "User upgraded to premium plan.",
  "user": {
    "id": "674829ba12ff9431f45ab012",
    "plan": "premium",
    "is_premium": true,
    "template_id": "TEMPLATE_03"
  }
}

---

## ⚙️ Common Error Responses

| Code | Message | Description |
|------|----------|--------------|
| 400 | Missing required fields | One or more fields are empty or invalid |
| 401 | Unauthorized | Invalid or expired token |
| 403 | Access denied | Insufficient permissions |
| 404 | Not found | User or resource not found |
| 409 | Conflict | Email already registered |
