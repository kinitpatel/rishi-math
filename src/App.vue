<template>
<!-- App.vue -->

<v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4 lighten-4"
      permanent
      color="purple"
    >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            MathLeague Trainer
          </v-list-item-title>
          <v-list-item-subtitle>
            boom
          </v-list-item-subtitle>
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
      { title: 'Remainders', to: { name: 'Remainders'} },
      { title: 'Add 4 numbers', to: { name: 'AddFour'}},
      { title: 'Add 2 numbers', to: { name: 'AddTwo'}},
      { title: 'Multiply',  to: { name: 'Multiply'}}, 
      { title: 'Compliments', to: { name: 'Compliments'}},
    ]
  }),
};
</script>
