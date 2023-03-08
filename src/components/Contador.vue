<template>
<h1>{{msg}}: {{ count ? count :0 }}</h1>
</template>

<script >
export default {
 data: ()=>({
    msg: "Counter",
    count: 1,
 }),
    
   
}
</script>

<style >

</style>