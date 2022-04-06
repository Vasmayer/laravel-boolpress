<template>
  <div>
      <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" :alt="post.title" />
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{post.description}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Card',
    props:['post'],

}
</script>

<style>

</style>