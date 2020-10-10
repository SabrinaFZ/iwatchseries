import { mount } from '@vue/test-utils';
import InputComponent from '@/components/input/input.component';

describe('Input component', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(InputComponent);
  });

  test('render component', () => {
    const component = wrapper.find('.v-input');
    expect(component.exists()).toBe(true);
  });

  test('emit event on input', () => {
    const input = wrapper.find('input');
    input.setValue('The Sopranos');
    expect(wrapper.emitted().input.length).toBe(1);
  });
});
