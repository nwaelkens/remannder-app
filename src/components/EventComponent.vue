<template>
  <div>
    <div class="level">
      <div class="level-item">
        <div class="avatar">
          <figure class="image is-32x32">
            <img class="avatar" src="../../static/avatars/rianne.jpg" />
          </figure>
        </div>
      </div>
      <div class="level-item">
        <div class="content">
          <div class="text-balloon">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      default: null,
      type: String
    },
    user: null
  }
};
</script>

<style scoped>
img.avatar {
  border-radius: 5px;
}
div {
  float: left;
}
div.avatar {
  width: 32px;
}

div.content {
  width: 100%;
}
.text-balloon {
  position: relative;
  left: 0.7rem;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 1.125em 1.5em;
  margin: 0 1rem 1rem 0;
  /* font-size: 1.7rem; */
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  /* font-family: "Caveat", cursive; */
  /* font-weight: bolder; */
  color: #999;
}

.today .text-balloon {
  background-color: #fff;
  color: #000;
}

.text-balloon::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: 60%;
  left: -0.7em;
  border: 0.75rem solid transparent;
  border-right: none;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  filter: drop-shadow(-0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.1));
}

.today .text-balloon::before {
  border-bottom-color: rgba(255, 255, 255, 1);
}

.level-item {
  flex-shrink: 1;
}
</style>
