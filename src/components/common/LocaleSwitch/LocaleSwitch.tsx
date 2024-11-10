import type { FC } from 'react';

import { JapanIcon, USIcon } from '@/components/icons/InternationalIcons/InternationalIcons';

import { usePathname, useRouter } from '@/i18n/routing';

interface Props {
  locale: string;
}

const LocaleSwitch: FC<Props> = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitchLocale = (newLocale: 'en' | 'ja') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-x-3">
      <button
        type="button"
        className={`w-8 ${locale !== 'en' && 'opacity-40'}`}
        disabled={locale === 'en'}
        onClick={() => handleSwitchLocale('en')}>
        <USIcon />
        {locale === 'en' && <span className="mt-px block h-[3px] w-full rounded-lg bg-white" />}
      </button>
      <button
        type="button"
        className={`w-8 ${locale !== 'ja' && 'opacity-40'}`}
        disabled={locale === 'ja'}
        onClick={() => handleSwitchLocale('ja')}>
        <JapanIcon />
        {locale === 'ja' && <span className="mt-px block h-[3px] w-full rounded-lg bg-white" />}
      </button>
    </div>
  );
};

export default LocaleSwitch;
