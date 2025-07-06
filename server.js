const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// --- Project Redirects ---
app.get('/ai-mcq-generator', (req, res) => {
    res.redirect('http://34.134.191.116:5002');
});

app.get('/youtube-ai-quizzer', (req, res) => {
    res.redirect('http://34.134.191.116:5001');
});

app.get('/bookmark-manager', (req, res) => {
    res.redirect('http://34.134.191.116:5003');
});

app.get('/movie-hub', (req, res) => {
    res.redirect('http://34.134.191.116:4002');
});

app.get('/todo-list', (req, res) => {
    res.redirect('http://34.134.191.116:3001');
});

// Fallback: Serve index.html for any unknown route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
});
