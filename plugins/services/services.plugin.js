import services from '@/services/services';

export default (context, inject) => {
  inject('services', services(context.$axios));
};
