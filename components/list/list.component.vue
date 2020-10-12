<template>
  <div v-if="items.length" class="list-component fle">
    <transition-group name="list">
      <v-card
        v-for="item in items"
        :key="item.id"
        tile
      >
        <div :class="`container d-flex flex-no-wrap align-center ${$device.isMobile ? 'flex-column' : ''}`">
          <v-avatar v-if="!$device.isMobile" size="60">
            <v-img :alt="`${item.name}_poster`" :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" />
          </v-avatar>
          <div class="container">
            <v-card-title
              class="headline"
              v-text="item.name"
            />
            <v-card-subtitle v-if="item.date_added">
              Date added: {{ formatDate(new Date(item.date_added)) }}
            </v-card-subtitle>
          </div>
          <v-card-actions>
            <v-btn
              outlined
              color="#eb6363"
              @click="remove(item)"
            >
              <v-icon color="#eb6363">
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </transition-group>
  </div>
  </v-card>
  </div>
</template>

<script>
import { formatDate } from '@/utils/date/date.util';

export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      formatDate
    };
  },
  methods: {
    remove(serie) {
      this.$emit('remove', serie);
    }
  }
};
</script>

<style lang="scss" scoped>
  .list-component {
    width: 80%;
    @include mobile {
      width: 100%;
    }
  }

  .v-card {
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 100%;
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
</style>
