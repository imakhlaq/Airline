import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';
import { CustomError } from '@/errors/custom-error';

/**
 * Global error handler if you throw any error in sync method it will be received here
 * async methods will also work because of the import "express-async-errors";
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	//TODO: need to format the zod thrown errors
	if (err instanceof ZodError) {
		let zodError = JSON.parse(err.message);
		return res.status(StatusCodes.BAD_REQUEST).json({
			statusCode: StatusCodes.BAD_REQUEST,
			message: zodError,
			timestamp: new Date()
		});
	}

	//for custom thrown errors
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({
			statusCode: err.statusCode,
			message: err.message,
			path: err.path,
			timestamp: new Date()
		});
	}

	//for server errors
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
		statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message,
		path: '/api/v1',
		timestamp: new Date()
	});
};
