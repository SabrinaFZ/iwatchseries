<template>
  <div class="container">
    <h1>
      <v-img
        lazy-src="/logo.png"
        max-height="200"
        max-width="200"
        src="/logo.png"
      />
    </h1>
    <InputComponent @input="searchSerie" @clean-dropdown="cleanDropdown()" />
    <DropdownComponent :items="seriesList" @add="addSerie" @remove="removeSelectedSerie" />
    <ListComponent :items="seriesWatched" @remove="removeSelectedSerie" />
  </div>
</template>

<script>
import InputComponent from '@/components/input/input.component';
import DropdownComponent from '@/components/dropdown/dropdown.component';
import ListComponent from '@/components/list/list.component';

export default {
  components: {
    InputComponent,
    DropdownComponent,
    ListComponent
  },
  data() {
    return {
      seriesList: [],
      seriesWatched: []
    };
  },
  methods: {
    async searchSerie(serieTitle) {
      const series = await this.$axios
        .$get(`${process.env.tmbdBaseUrl}search/tv?api_key=${process.env.tmbdApiKey}&language=en-US&query=${serieTitle}`);
      this.filterSeries(series.results.slice(0, 5));
    },

    filterSeries(seriesList) {
      let filteredSeriesList = [];
      const seriesListClone = [...seriesList];

      this.seriesWatched.forEach(selectedSerie => {
        seriesListClone.forEach((serie, index) => {
          if (selectedSerie.id === serie.id) {
            seriesListClone.splice(index, 1);
            filteredSeriesList.push(selectedSerie);
          }
        });
      });

      filteredSeriesList = [
        ...seriesListClone,
        ...filteredSeriesList
      ];

      this.seriesList = filteredSeriesList;
    },

    cleanDropdown() {
      this.seriesList = [];
    },

    addSerie(serie) {
      this.seriesWatched.push({
        ...serie,
        selected: true,
        date_added: new Date()
      });
      this.removeSerie(serie);
    },

    removeSerie(serie) {
      this.seriesList = this.seriesList.filter(item => item.id !== serie.id);
    },

    removeSelectedSerie(serie) {
      let hasChanged = false;
      this.seriesWatched = this.seriesWatched.filter(item => item.id !== serie.id);
      this.seriesList = this.seriesList.map(item => {
        if (item.id === serie.id) {
          hasChanged = true;
          return {
            ...item,
            selected: false
          };
        }
        return item;
      });
      if (!hasChanged && this.seriesList.length) {
        this.seriesList.push({
          ...serie,
          selected: false
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }
</style>
