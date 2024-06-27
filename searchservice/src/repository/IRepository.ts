interface IRepository<T> {
	create(data: T): T;
}
