# Car Wash Booking System

A simple and efficient car wash booking system.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables) -[Technology Stack](#technology-stack)

## Description

This project is a Car Wash Booking System that allows users to book car wash services conveniently. It utilizes a MongoDB database for storing user and booking information, and JSON Web Tokens (JWT) for authentication.

### Technology Stack

- **TypeScript**: The primary programming language for its type safety and modern features.
- **Express.js**: The web framework for building the API.
- **Mongoose**: The Object Data Modeling (ODM) library for MongoDB, used for data validation and schema modeling.

## Features

- User registration and authentication
- Booking car wash services
- JWT-based authentication
- Password hashing using bcrypt

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ekramul28/Car-Wash-Booking-System-server.git
   cd car-wash-booking-system
   ```

2. Install dependencies

   ```bash
   npm install
   ```

   or if you use yarn

   ```bash
   yarn install
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root directory of your project:

```plaintext
PORT=your port
NODE_ENV=development
DATABASE_URL=give your mongodb url name and password
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET=give your secret
JWT_ACCESS_EXPIRES_IN=give your expires
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=1d
```
