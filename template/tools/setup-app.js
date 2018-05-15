import Vue from 'vue';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'v-alert',
  'v-app',
  'v-avatar',
  'v-badge',
  'v-bottom-nav',
  'v-bottom-sheet',
  'v-breadcrumbs', 'v-breadcrumbs-item',
  'v-btn',
  'v-btn-toggle',
  'v-card', 'v-card-media', 'v-card-title', 'v-card-text', 'v-card-actions',
  'v-carousel', 'v-carousel-item',
  'v-checkbox',
  'v-chip',
  'v-data-iterator',
  'v-data-table', 'v-edit-dialog',
  'v-date-picker', 'v-date-picker-date-table', 'v-date-picker-header', 'v-date-picker-month-table', 'v-date-picker-title', 'v-date-picker-years',
  'v-dialog',
  'v-divider',
  'v-expansion-panel', 'v-expansion-panel-content',
  'v-fade-transition',
  'v-footer',
  'v-form',
  'v-container', 'v-content', 'v-flex', 'v-layout',
  'v-icon',
  'v-jumbotron',
  'v-list', 'v-list-group', 'v-list-tile', 'v-list-tile-action', 'v-list-tile-avatar',
  'v-menu',
  'v-navigation-drawer',
  'v-pagination',
  'v-parallax',
  'v-picker',
  'v-progress-circular',
  'v-progress-linear',
  'v-radio', 'v-radio-group',
  'v-select',
  'v-slider',
  'v-snackbar',
  'v-spacer',
  'v-speed-dial',
  'v-stepper', 'v-stepper-content', 'v-stepper-step',
  'v-subheader',
  'v-switch',
  'v-system-bar',
  'v-tab', 'v-tab-item', 'v-tabs', 'v-tabs-items', 'v-tabs-slider',
  'v-text-field',
  'v-time-picker', 'v-time-picker-clock', 'v-time-picker-title',
  'v-toolbar', 'v-toolbar-side-icon',
  'v-tooltip',
];

Object.defineProperty(window, 'localStorage', {
  value: (() => {
    let store = {};

    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      clear() {
        store = {};
      },
    };
  })(),
});
