import React from "react";
import Task_1 from './task-1';
import Task_2 from './task-2';
import Task_3 from './task-3';
import Task_4 from './task-4';
import AdditionalTask_1 from './additional-task-1';
import AdditionalTask_2 from './additional-task-2';

const ReactHooks = () => {
	return (
		<>
			<h3>AdditionalTask 2</h3>
			<AdditionalTask_2 />

			<h3>AdditionalTask 1</h3>
			<AdditionalTask_1 />

			<h3>Task 4</h3>
			<Task_4 />

			<h3>Task 3</h3>
			<Task_3 />

			<h3>Task 2</h3>
			<Task_2 />

			<h3>Task 1</h3>
			<Task_1 />
		</>
	)
}

export default ReactHooks;