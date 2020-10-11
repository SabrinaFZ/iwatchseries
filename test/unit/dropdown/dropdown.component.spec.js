import { mount } from '@vue/test-utils';
import DropdownComponent from '@/components/dropdown/dropdown.component';
import seriesMock from '@/test/mocks/series.mock';

describe('DropdownComponent', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(DropdownComponent);
  });
  it('not render Dropdown component without items', () => {
    const component = wrapper.find('.v-list');
    expect(component.exists()).toBe(false);
  });

  it('render Dropdown component with items', async () => {
    await wrapper.setProps({
      items: seriesMock
    });
    const component = wrapper.find('.v-list');
    expect(component.exists()).toBe(true);
  });
  it('render items in Dropdown component', async () => {
    await wrapper.setProps({
      items: seriesMock
    });
    const component = wrapper.findAll('.v-list-item');
    expect(component.length).toBe(wrapper.props().items.length);
  });
});
