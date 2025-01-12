import type { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

import getCustomColorClass from '@/utils/getCustomColorClass';

import { usePathname, useRouter } from '@/i18n/routing';
import type { Color } from '@/types/color';
import type { Locale } from '@/types/locale';

interface Props {
  globalLocale: Locale;
  locale: Locale;
  themeColor: Color;
  children: ReactNode;
}

const LocaleSwitch: FC<Props> = ({ globalLocale, locale, themeColor, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const customBgColorClass = getCustomColorClass('bg', themeColor, 500);

  const handleSwitchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.button
      type="button"
      className={`w-8 ${globalLocale !== locale && 'opacity-40'}`}
      disabled={globalLocale === locale}
      onClick={() => handleSwitchLocale(locale)}
      whileHover={{ scale: globalLocale !== locale ? 1.1 : 1.0 }}
      whileTap={{ scale: globalLocale !== locale ? 0.9 : 1.0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
      {children}
      {globalLocale === locale && <span className={`mt-px block h-[3px] w-full rounded-lg ${customBgColorClass}`} />}
    </motion.button>
  );
};

export default LocaleSwitch;
