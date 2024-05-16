const jwt = ("jsonwebtoken")

//This midleware acts like a security guard for your application. It checks if a request to your server has a valid "pass" (a JSON Web Token, or JWT) in the form of a cookie named auth-token. If the request doesn't have this token, or if the token is invallid (like an expired or fake pass), the middleware stops the request from accessing certain parts of your application and sends an error message back. This way, only requests from users who have properly logged in and recieved a valid token can access specific secure areas of your application. This ensures that your application's sensitive data and functionalities are protected from unauthorized access.

function AuthMiddleware(req, res, next) {
    const token = req.cookies["auth-token"];

    //An auth-token is a special kind of cookie that acts like a key for accessing certain parts of a website. It proves that a user has the right to enter and use those parts because they've logged in seccessfully before.
    //Using cooke-parser:When someone visits your wevsite, cookei-parser makes it easy to find and read the auth-token stored in their cookies.
    //Checking auth-token:Each time the server gets a request from the user's browser, it checks this token to make sure it's valid. If it is, the server allows the user to continue what they were doing, like accessing a member-only area. If not, it might ask them to log in again.

    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, process.evn.JWT_SECRET);

        req.userId = decoded.userId;
        next();
        //This function call tells Express to proceed to the next middleware in the stack or to the route handler if this is the last middleware. It's essential to call this if you want to continue processing the request after the middleware.
    }
    catch (e) {
        res.status(400).json({ msg: "Token is not valid" });
    }
}

module.exports = AuthMiddleware;

// This middleware is used to authenticate requests usinng JSON Web Tokens (JWT)
//It first checks of the auth-token cookie exists on the request
//If on token is found, it returns a 401 unauthorised error 
//If a token is found, it verified against the JWT_SECRET environment variable
//If valid, the decoded userId is added to the request object 
//Then next() is called to pass execution to next middleware
//If invalid, a 400 bad request error is returned.