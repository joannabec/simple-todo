<template>
	<section class="w-1/2">
		<h2>Tareas completadas</h2>
		<details>
			<summary>Ver</summary>
			<p v-if="!arrDeleted.length">No hay tareas para mostrar</p>
			<ul v-else>
				<li v-for="item in arrDeleted">{{ item.task }}</li>
			</ul>
		</details>
	</section>
</template>

<script>
export default {
	name: 'CompletedTasks',
	props: {
		arrDeleted: Array,
	},
};
</script>
