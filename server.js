const express = require('express');
const app = express();
app.use(requireHTTPS);

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(express.static("./dist/my-app"));

app.get("/*", function(req, res) {
    res.sendFile(
        "index.html", 
        { root: "dist/my-app/inde.html" }
    );
});

const PORT = 3001;
app.listen(PORT, () => {
   console.log(`le serveur est lancé sur le port ${PORT}`)
})