import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset, palette } from '@primeuix/themes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['it', 'en'],
        defaultLang: 'it',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: palette('{violet}'),
            colorScheme: {
              light: {
                primary: {
                  color: '#7954ca',
                  contrastColor: '#ffffff',
                  hoverColor: '#6944b6',
                  activeColor: '#583899',
                },
                text: {
                  color: '#383044',
                  hoverColor: '#2c2535',
                  mutedColor: '#9a92a6',
                  hoverMutedColor: '#81788d',
                },
                content: {
                  borderColor: '#ede9f2',
                },
              },
            },
          },
          components: {
            button: {
              root: {
                borderRadius: '7px',
                gap: '9px',
                paddingX: '18px',
                paddingY: '12px',
                label: {
                  fontWeight: '550',
                },
                transitionDuration: '0.15s',
              },
            },
            card: {
              root: {
                borderRadius: '15px',
                shadow: 'none',
              },
            },
            progressbar: {
              root: {
                background: '#e9e3f3',
                borderRadius: '5px',
                height: '5px',
              },
            },
            tag: {
              root: {
                fontSize: '10px',
                fontWeight: '550',
                padding: '6px 10px',
                borderRadius: '5px',
              },
              colorScheme: {
                light: {
                  secondary: {
                    background: '#f3edfb',
                    color: '#9774bd',
                  },
                },
              },
            },
          },
        }),
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng '
          },
        },
      },
    }),
  ],
};
