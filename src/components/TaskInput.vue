<template>
	<input
		class="w-1/2 border-2 rounded-sm p-1"
		type="text"
		:placeholder="props.placeholder"
		v-model="inputValue"
	/>
	<div class="flex gap-3 mt-3">
		<base-button @click="handleInput" mode="btn-primary">Agregar</base-button>
		<base-button @click="showComponent('AddTask')" mode="btn-cancel">
			Cancelar
		</base-button>
	</div>
</template>

<script>
export default {
	name: 'TaskInput',
	props: ['props'],
	inject: ['showComponent', 'saveTask'],
	data() {
		return {
			inputValue: '',
		};
	},
	methods: {
		handleInput() {
			if (this.inputValue.trim() !== '') {
				this.saveTask(this.inputValue);
				this.inputValue = '';
			}
		},
	},
};
</script>
