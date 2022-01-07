<script setup>
import { reactive, shallowRef, computed, provide } from 'vue';
import AddTask from './components/AddTask.vue';
import TaskInput from './components/TaskInput.vue';
import TasksList from './components/TasksList.vue';

const selectedComponent = shallowRef(AddTask);
const taskList = reactive([]);

// Props según el componente seleccionado
const props = computed(() =>
	selectedComponent.value.name === 'AddTask'
		? { title: 'Añadir tarea' }
		: { placeholder: 'Ej. Reunión con cliente' }
);

// Función para mostrar componente seleccionado
function showComponent(val) {
	if (val === 'TaskInput') {
		selectedComponent.value = TaskInput;
	} else if (val === 'AddTask') {
		selectedComponent.value = AddTask;
	}
}

function saveTask(val) {
	taskList.push({
		id: new Date().getTime().toString(),
		task: val,
	});
}

function deleteTask(taskId) {
	const index = taskList.map((item) => item.id).indexOf(taskId);
	taskList.splice(index, 1);
}

provide('showComponent', showComponent);
provide('saveTask', saveTask);
provide('deleteTask', deleteTask);
</script>

<template>
	<div class="container mx-auto pt-10">
		<h1 class="mb-4 text-3xl font-bold tracking-tighter">To do list</h1>
		<TasksList v-if="taskList.length > 0" :arr="taskList"></TasksList>
		<component :is="selectedComponent" :props="props"></component>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
