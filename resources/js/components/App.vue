<template>
    <div class="container">
       <PostList />
    </div>
</template>

<script>
import Header from './Header.vue';
import PostList from './posts/PostList.vue';

  export default {
      name:'App',
      components:
      {
          Header,
          PostList,
      },
      data(){
          return {
              title:'Benvenuti con la props',
          }
      }
}
</script>
