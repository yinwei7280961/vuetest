<template>
	<div id="ball"></div>
</template>
<script>
export default{
	name: 'Header',
}
</script>
<style>
	#ball {
	    width:12px;
	    height:12px;
	    background: #5EA345;
	    border-radius: 50%;
	    position: fixed;
	    transition: left 1s linear, top 1s ease-in;
	}
</style>