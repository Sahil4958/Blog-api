import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const parse = schema.safeParse(req.body);

    if (!parse.success) {
      const errors = parse.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return res.status(400).json({ success: false, errors });
    }

    req.body = parse.data;
    return next();
  };
