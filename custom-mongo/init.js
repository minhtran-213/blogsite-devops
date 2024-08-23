db = db.getSiblingDB('blogsite'); // Switch to the blogsite database

// Create a user with readWrite access to the blogsite database
db.createUser({
    user: 'admin',
    pwd: 'admin', // Use the same password as in your .env file
    roles: [{ role: 'readWrite', db: 'blogsite' }]
});
