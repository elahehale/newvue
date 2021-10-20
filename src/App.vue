<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: "Yekan";
  src: local("Yekan"),
   url(./fonts/IRANYekanWebMedium.woff) format("truetype");
}
</style>
