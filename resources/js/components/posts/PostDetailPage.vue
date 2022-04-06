<template>
  <PostCard :post="post"/>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
name:'PostDetail',
components:
{
    PostCard,
},
data(){
    return {
        post:null,
    }
},
methods: {
    getPost()
    {
        axios.get('http://localhost:8000/api/posts/' + this.$route.params.id).then(res =>{
            this.post = res.data;
            console.log(res.data);

        }).catch(err =>{
            console.error(err);
        }).then(() =>{
            console.log('Chiamata terminata');
        }
        )
    }
},
mounted(){
    this.getPost();
}
}
</script>

<style>

</style>