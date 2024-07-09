const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

let refreshTokens = [];

const generateAccessToken = user => jwt.sign({ id: user.id }, "mySecretKey", { expiresIn: '5s' });
const generateRefreshToken = user => jwt.sign({ id: user.id }, "myRefreshSecretKey", { expiresIn: '15m' });

router.post("/refresh", (req, res) => {
    const refreshToken = req.body.token;

    if (!refreshToken) return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json('Refresh token is not valid!');
    }

    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
        if (err) {
            return res.status(403).json("Refresh token is not valid!");
        }

        refreshTokens = refreshTokens.filter(token => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (user && user.password === password) {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        refreshTokens.push(refreshToken);

        res.json({
            name: user.name,
            email: user.email,
            id: user.id,
            accessToken,
            refreshToken,
        });
    } else {
        res.status(400).json("email or Password Invalid");
    }
});

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid");
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated");
    }
};

router.post('/logout', verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter(token => token !== refreshToken);
    res.status(200).json("You logged out successfully");
});

module.exports = router;
