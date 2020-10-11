import series from './series/series.service';

export default $axios => (
  {
    series: series($axios)
  }
);
