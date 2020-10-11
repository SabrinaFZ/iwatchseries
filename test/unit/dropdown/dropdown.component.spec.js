import { mount } from '@vue/test-utils';
import DropdownComponent from '@/components/dropdown/dropdown.component';

describe('DropdownComponent', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(DropdownComponent);
  });
  it('render Dropdown component without items', () => {
    const component = wrapper.find('.v-list');
    expect(component.exists()).toBe(false);
  });

  it('render Dropdown component with items', async () => {
    await wrapper.setProps({
      items: [{
        original_name: 'Historie.cs',
        genre_ids: [10767],
        name: 'Historie.cs',
        popularity: 5.512,
        origin_country: ['CZ'],
        vote_count: 1,
        first_air_date: '2007-09-03',
        backdrop_path: null,
        original_language: 'cs',
        id: 94797,
        vote_average: 9,
        overview: '',
        poster_path: '/1xiuPpYnLsuI5pAHIEKdFHGpYxl.jpg'
      }, {
        original_name: 'CSI: NY',
        genre_ids: [80, 18, 9648],
        name: 'CSI: NY',
        popularity: 80.557,
        origin_country: ['US'],
        vote_count: 291,
        first_air_date: '2004-09-22',
        backdrop_path: '/xwhp6vi30tOYnMcsHaIEbloLkH3.jpg',
        original_language: 'en',
        id: 2458,
        vote_average: 7.2,
        overview: 'CSI: NY is an American police procedural',
        poster_path: '/blajdd5D01slFW2Er5SMwXhs9IM.jpg'
      }]
    });
    const component = wrapper.find('.v-list');
    expect(component.exists()).toBe(true);
  });
  it('render items is Dropdown component', async () => {
    await wrapper.setProps({
      items: [{
        original_name: 'Historie.cs',
        genre_ids: [10767],
        name: 'Historie.cs',
        popularity: 5.512,
        origin_country: ['CZ'],
        vote_count: 1,
        first_air_date: '2007-09-03',
        backdrop_path: null,
        original_language: 'cs',
        id: 94797,
        vote_average: 9,
        overview: '',
        poster_path: '/1xiuPpYnLsuI5pAHIEKdFHGpYxl.jpg'
      }, {
        original_name: 'CSI: NY',
        genre_ids: [80, 18, 9648],
        name: 'CSI: NY',
        popularity: 80.557,
        origin_country: ['US'],
        vote_count: 291,
        first_air_date: '2004-09-22',
        backdrop_path: '/xwhp6vi30tOYnMcsHaIEbloLkH3.jpg',
        original_language: 'en',
        id: 2458,
        vote_average: 7.2,
        overview: 'CSI: NY is an American police procedural',
        poster_path: '/blajdd5D01slFW2Er5SMwXhs9IM.jpg'
      }]
    });
    const component = wrapper.findAll('.v-list-item');
    expect(component.length).toBe(wrapper.props().items.length);
  });
});
