import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const WeddingPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{pink.50}',
      100: '{pink.100}',
      200: '{pink.200}',
      300: '{pink.300}',
      400: '{pink.400}',
      500: '{pink.500}',
      600: '{pink.600}',
      700: '{pink.700}',
      800: '{pink.800}',
      900: '{pink.900}',
      950: '{pink.950}',
    },
    root: {
        surfaceGround: '{pink.500}'
    }
  },
  colorScheme: {
    light: {
        root: {
            background: '{pink.500}'
        }
    }
  }
});
