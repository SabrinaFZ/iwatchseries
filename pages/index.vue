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
  </div>
</template>

<script>
import InputComponent from '@/components/input/input.component';
import DropdownComponent from '@/components/dropdown/dropdown.component';

export default {
  components: {
    InputComponent,
    DropdownComponent
  },
  data() {
    return {
      seriesList: [],
      selectedSeriesList: []
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

      this.selectedSeriesList.forEach(selectedSerie => {
        seriesListClone.forEach((serie, index) => {
          if (selectedSerie.id === serie.id) {
            seriesListClone.splice(index, 1);
            filteredSeriesList.push({
              ...selectedSerie,
              selected: true
            });
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
      this.selectedSeriesList.push(serie);
      this.removeSerie(serie);
    },

    removeSerie(serie) {
      this.seriesList = this.seriesList.filter(item => item.id !== serie.id);
    },

    removeSelectedSerie(serie) {
      this.selectedSeriesList = this.selectedSeriesList.filter(item => item.id !== serie.id);
      this.seriesList = this.seriesList.map(item => {
        if (item.id === serie.id) {
          return {
            ...serie,
            selected: false
          };
        }
        return serie;
      });
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
