<!-- App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。所以我将router标示为App.vue的子组件。 -->
<template>
	<div>
		<h2>hello vue</h2>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
	}
</script>
<style>
</style>