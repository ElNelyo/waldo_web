/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, MapIcon, SparklesIcon } from '@heroicons/react/outline'
import mint from '../images/mint.png'
import Zoom from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next';



  export default function Benefits() {

    const { t, i18n } = useTranslation();

  return (
    <div className="relative bg-gradient-to-t from-orange-500 to-violet-500  pt-16 pb-32 overflow-hidden">
    
    <Zoom>
      <div className='text-4xl sm:text-7xl text-center my-20 text-white mt-20 shiny uppercase 2xl:pt-20 title-orange'>{t('next_text_title')}</div>
      </Zoom>
      <Zoom>
      <div className='text-white text-center text-2xl mx-auto mb-12 indie'>
          {t("next_text_1")}
        </div>
    </Zoom>


  <Zoom><div className='text-white text-center text-2xl mx-auto mb-12 indie'>{t("next_text_2")}</div></Zoom>
     <Zoom><img src={mint} className="w-full md:w-1/2 mx-auto rounded-3xl"></img></Zoom>
    </div>
  )
}
