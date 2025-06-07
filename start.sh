#!/bin/bash

# Start Spring Boot backend
cd java
./mvnw spring-boot:run &
BACKEND_PID=$!
cd ..

# Start React frontend
cd frontend
npm start &
FRONTEND_PID=$!
cd ..

# Wait for both to finish (Ctrl+C to stop)
wait $BACKEND_PID $FRONTEND_PID