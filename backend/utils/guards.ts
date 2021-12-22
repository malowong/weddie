import {Bearer} from 'permit';
import jwtSimple from 'jwt-simple';
import express from 'express';
import jwt from './jwt';
import { userService } from '../routers/userRoutes';

const permit = new Bearer({
    query:"access_token"
})

export async function isLoggedIn(req:express.Request, res:express.Response, next:express.NextFunction){
    try{
        const token = permit.check(req);
        if(!token){
            return res.status(401).json({msg:"Permission Denied"});
        }
        const payload = jwtSimple.decode(token,jwt.jwtSecret);
        // Querying Database is not compulsory
        const user = await userService.getUserById(payload.id);
        if (!user) {
            return res.status(401).json({ msg: "Permission Denied" });
          }
          const { id, phone } = user;
          req.user = { id, phone };
          return next();
    }catch(e){
        return res.status(401).json({msg:"Permission Denied"});
    }
}