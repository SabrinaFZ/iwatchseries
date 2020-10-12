import { mount } from '@vue/test-utils';
import ListComponent from '@/components/list/list.component';
import seriesMock from '@/test/mocks/series.mock';

describe('ListComponent', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(ListComponent);
    wrapper.vm.$device = {
      isMobile: false,
      isDesktop: true
    };
  });
  it('not render ListComponent with no items', () => {
    const component = wrapper.find('.list-component');
    expect(component.exists()).toBe(false);
  });
  it('render ListComponent with items', async () => {
    await wrapper.setProps({
      items: seriesMock
    });
    const component = wrapper.find('.list-component');
    expect(component.exists()).toBe(true);
  });
  it('render items in List component', async () => {
    await wrapper.setProps({
      items: seriesMock
    });
    const component = wrapper.findAll('.v-card');
    expect(component.length).toBe(wrapper.props().items.length);
  });
});
