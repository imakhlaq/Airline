import { CustomError } from '@/errors/custom-error';

export class NoCityFound extends CustomError {
	constructor(statusCode?: number, message?: string, path?: string) {
		super(statusCode, message, path);

		Object.setPrototypeOf(this, CustomError);
	}
}
