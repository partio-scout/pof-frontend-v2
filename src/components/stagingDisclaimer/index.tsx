import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return process.env.GATSBY_CLOUD_ENV === 'staging' ? (
    <div className="min-h-24 flex justify-center items-center bg-red-700 p-4">
      <h4 className="text-white">
        {t('staging-disclaimer')}
        <a className="text-blue-300 hover:text-blue-500" href="https://partio-ohjelma.fi">
          partio-ohjelma.fi
        </a>
        .
      </h4>
    </div>
  ) : null;
};

export default Banner;
