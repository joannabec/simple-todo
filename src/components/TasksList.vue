<template>
	<div class="mb-5">
		<button
			class="flex items-center gap-2"
			v-for="obj in arr"
			:key="obj.id"
			@click="deleteTask(obj.id)"
		>
			<input type="checkbox" :id="obj.id" />
			<label :for="obj.id">{{ obj.task }}</label>
		</button>
	</div>
</template>

<script>
export default {
	name: 'TasksList',
	props: ['arr'],
	inject: ['deleteTask'],
};
</script>
