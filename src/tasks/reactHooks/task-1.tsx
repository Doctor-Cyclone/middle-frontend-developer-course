import useFetch from '../../custom-hooks/useFetch';

const Task_1 = () => {
	const {
		data,
		isLoading,
		error,
		reFetch
	} = useFetch('https://jsonplaceholder.typicode.com/posts');

	return (
		<>
			<div>
				<button onClick={() => reFetch({
					params: {
						_limit: 3
					}
				})}>
					Перезапросить
				</button>
			</div>
			{isLoading && 'Загрузка...'}
			{error && 'Произошла ошибка'}
			{data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
		</>
	);
}

export default Task_1;