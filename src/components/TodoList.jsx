import Todo from "./Todo";

const TodoList = () => {
	return (
		<div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
			{/* ------------TODO------------ */}
			<Todo />
		</div>
	);
};

export default TodoList;
