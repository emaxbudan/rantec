
import { Admin } from "mongodb";
import userModel from "../models/user.js"

export function checkAdmin(req, res, next) {
    const user = userModel.findOne({username: req.body.username});

    // if ( !user || user.role !== "Admin" ) res.send("permission Denied").end();
    if ( !Admin ) res.send("permission Denied").end();

    next();
}

