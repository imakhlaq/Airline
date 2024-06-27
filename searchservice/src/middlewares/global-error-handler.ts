import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

/**
 * Global error handler if you throw any error in sync method it will be received here
 * async methods will also work because of the import "express-async-errors";
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	//if it's an array generally in case of checking request body
	if (err instanceof ZodError) {
		let zodError = JSON.parse(err.message);
		return res.status(StatusCodes.BAD_REQUEST).json({ message: 'some generic message', errors: zodError });
	}

	//it's not and array to keep a similar structure convert into an array

	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		message: 'some generic message111',
		errors: err.message
	});
};
