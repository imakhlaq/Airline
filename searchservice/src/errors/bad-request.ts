import { CustomError } from '@/errors/custom-error';

type Param = {
	code?: number;
	message?: string;
	logging?: boolean;
	context?: { [key: string]: never };
};

export default class BadRequest extends CustomError {
	private static readonly _statusCode = 400;
	private readonly _code: number;
	private readonly _logging: boolean;
	private readonly _context: { [key: string]: never };

	constructor(params?: Param) {
		const { code, message, logging } = params || {};

		super(message || 'Bad request');
		this._code = code || BadRequest._statusCode;
		this._logging = logging || false;
		this._context = params?.context || {};

		// Only because we are extending a built-in class
		Object.setPrototypeOf(this, BadRequest.prototype);
	}

	get errors() {
		return [{ message: this.message, context: this._context }];
	}

	get statusCode() {
		return this._code;
	}

	get logging() {
		return this._logging;
	}
}
