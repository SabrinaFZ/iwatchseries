<template>
  <transition name="slide-fade">
    <v-list v-if="items.length">
      <v-card>
        <transition-group name="list">
          <v-list-item
            v-for="item in items"
            :key="item.id"
          >
            <v-list-item-avatar height="60px" width="60px">
              <v-img
                v-if="item.poster_path"
                :alt="`${item.name}_poster`"
                :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                v-if="item.selected"
                outlined
                color="#eb6363"
                @click="remove(item)"
              >
                <v-icon color="#eb6363">
                  mdi-close
                </v-icon>
              </v-btn>
              <v-btn
                v-else
                outlined
                color="#00E676"
                @click="add(item)"
              >
                <v-icon color="#00E676">
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          </v-list-item-group>
        </transition-group>
      </v-card>
    </v-list>
  </transition>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    add(serie) {
      this.$emit('add', serie);
    },
    remove(serie) {
      this.$emit('remove', serie);
    }
  }
};
</script>

<style lang="scss" scoped>
  .v-list {
    width: 80%;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
  }

  .slide-fade-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
</style>
