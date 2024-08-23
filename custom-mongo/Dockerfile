# Use the official MongoDB image as the base
FROM mongo:7.0

# Copy the initialization script into the container
COPY init.js /docker-entrypoint-initdb.d/

# Set the default command to run MongoDB
CMD ["mongod"]