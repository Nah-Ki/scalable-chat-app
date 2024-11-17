import { Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/db.config.js";

interface LoginPayloadtype {
  name: string;
  email: string;
  provider: string;
  auth_id: string;
  image?: string;
}

class AuthController {
  static async login(request, response: Response) {
    try {
      const body: LoginPayloadtype = request.body;
      let findUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!findUser) {
        findUser = await prisma.user.create({
          data: body,
        });
      }

      let JWTPayload = {
        name: body.name,
        email: body.email,
        id: findUser.id,
      };
      const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });
      return response.json({
        message: "Logged in successfully",
        user: {
          ...findUser,
          token: `Bearer${token}`,
        },
      });
    } catch (error) {
      return response.status(500).json({
        message: "Something went wrong please try again",
      });
    }
  }
}

export default AuthController;
