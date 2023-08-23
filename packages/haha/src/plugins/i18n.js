import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { localeModules } from '@/modules';
Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const messages = {};
  if (!localeModules) { return messages; }
  const moduleKeys = Object.keys(localeModules);
  if (moduleKeys.length > 0) {
    for (let i = 0; i < moduleKeys.length; i += 1) {
      localeModules[moduleKeys[i]].keys().forEach((key) => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
          const locale = matched[1];
          messages[locale] = {
            ...localeModules[moduleKeys[i]](key),
            ...messages[locale],
          };
        }
      });
    }
  }
  return messages;
};
const detectLanguage = () => {
  const locale = localStorage.getItem('language');
  if (locale) {
    return locale;
  }
  const language = 'zhHans';
  localStorage.setItem('language', 'zhHans');
  return language;
};

const i18n = new VueI18n({
  locale: detectLanguage(),
  fallbackLocale: 'zhHans',
  messages: loadLocaleMessages(),
});

export default i18n;
