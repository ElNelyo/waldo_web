import React from 'react';
import { Zoom } from 'react-reveal';
import community from '../images/community.png';
import { useTranslation } from 'react-i18next';

  
  export default function Community() {
      const { t, i18n } = useTranslation();
    

      const posts = [
        {
          title: t("community_text_1"),
          description: t("community_text_2"),
        },
        {
          title:  t("community_text_3"),
          description:  t("community_text_4"),
        }
      ]

    return (
      <div className="bg-gradient-to-r from-violet-500 to-pink-500 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
          <Zoom>
            <h2 className="text-4xl sm:text-7xl title-green tracking-tight mb-12 mt-20 shiny text-center font-extrabold text-white uppercase pacifico" id="community">{t("community_title")}</h2>
          </Zoom>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <Zoom>
              <div key={post.title}>
                  <p className="text-4xl font-semibold text-green-500 pacifico">{post.title}</p>
                  <p className="mt-3 text-2xl text-white">{post.description}</p>
              </div>
              </Zoom>
            ))}
            <Zoom>
              <img src={community} alt="community" className='rounded-3xl'></img>
            </Zoom>
          </div>
        </div>
      </div>
    )
  }
  