const fs = require('fs');

// Asynchronous write file
fs.writeFile('msg.txt', 'Hello Node.js!', 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File written successfully.');
});

// Synchronous write file
try {
    fs.writeFileSync('msg.txt', 'Hello Node.js!', 'utf8');
    console.log('File written successfully.');
} catch (err) {
    console.error(err);
}
