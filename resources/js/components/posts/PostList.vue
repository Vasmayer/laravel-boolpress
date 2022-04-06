<template>
  <div>
      <h2>POSTS</h2>
      <ul class="m-3" v-if="posts.length">
          <li v-for="post in posts" :key="post.id">{{post.title}}</li>
      </ul>
      <div v-else>
          <h4>Non ci sono posts</h4>
      </div>
  </div>
</template>

<script>
export default {
name: 'PostList',
data()
{
    return {
        posts:[],
    };
},
methods:
{
    getPosts()
    {
        axios.get('http://localhost:8000/api/posts').then(res =>{
            this.posts = res.data;
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
    this.getPosts();
}
}
</script>

