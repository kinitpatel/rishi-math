<template>
<!-- App.vue -->

<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      permanent
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
            
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
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
      { title: 'Remainders', icon: 'mdi-play-box' },
      { title: 'Add 4 numbers', icon: 'mdi-play-box'},
      { title: 'Add 2 numbers', icon: 'mdi-play-box' },
      { title: 'Multiply', icon: 'mdi-play-box' }, 
      { title: 'Compliments', icon: 'mdi-play-box' },
    ]
  }),
};
</script>
