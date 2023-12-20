# Step 1: Build the React application
FROM node:latest as react-build
WORKDIR /app
COPY client/package*.json /app/client/
RUN npm --prefix ./client install ./client
COPY client/ /app/client/
RUN npm --prefix ./client run build

# Step 2: Set up the FastAPI server
FROM python:3.9
# Set the working directory specifically for the server
WORKDIR /app/server
COPY ./server/requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Copy the FastAPI server files
COPY ./server/ .

# Copy the React build to the server's static directory
COPY --from=react-build /app/client/dist /app/server/static

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
