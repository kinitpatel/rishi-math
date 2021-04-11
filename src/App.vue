<template>
<!-- App.vue -->

<v-app id="app">
    <v-navigation-drawer
      app
      class="pt-4 lighten-4"
      permanent
      color="blue"
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            MathLeague Trainer
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

       <v-divider></v-divider>
  
        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
            exact
            
          >
            <!-- <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon> -->
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    items: [
      { title: 'Remainders', to: { name: 'Home', query: { quiz: 'remainders'}} },
      { title: 'Add 4 numbers', to: { name: 'Home', query: { quiz: 'add-four'}} },
      { title: 'Add 2 numbers', to: { name: 'Home', query: { quiz: 'add-two'}} },
      { title: 'Multiply',  to: { name: 'Home', query: { quiz: 'multiply'}} }, 
      { title: 'Complements', to: { name: 'Home', query: { quiz: 'complements'}} },
    ]
  }),
};
</script>
