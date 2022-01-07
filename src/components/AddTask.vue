<template>
	<base-button @click="showComponent('TaskInput')" mode="btn-add">
		<span class="material-icons">add</span>
		<span class="add-text">{{ props.title }}</span>
	</base-button>
</template>

<script>
export default {
	name: 'AddTask',
	props: ['props'],
	inject: ['showComponent'],
};
</script>
