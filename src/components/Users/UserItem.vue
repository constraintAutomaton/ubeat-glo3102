<template>
    <ul>
        <li>
        {{user.name}}
        </li>
    </ul>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {}
  }
};
</script>