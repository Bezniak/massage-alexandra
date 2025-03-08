import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import RequestForm from "./RequestForm.jsx";

const AboutUs = () => {
    const {t} = useTranslation();
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <div
                className='md:bg-[url(/aboutUsBig.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/aboutUsMobile.jpg)] flex items-center justify-center'>
                <h1 className="container text-white text-center z-50">
                    {t("aboutUs")}
                </h1>
            </div>
          <div className='container mx-auto py-10 md:py-20 px-5 md:px-0'>
              <div>
                  <h2 className='text-center'>
                      {t("aboutUsTitle.title")}
                  </h2>
                  <h3 className='mt-20 mb-10 font-semibold'>
                      {t("aboutUsTitle.whyChooseUs")}
                  </h3>
                  <div className='flex flex-wrap items-center justify-center md:justify-between gap-12'>
                      <figure
                          className="relative max-w-sm">
                          <img className="rounded-lg"
                               src="/decore_1.jpg"
                               alt="image description"/>
                          <h3 className='text-black font-medium'>
                              {t("aboutUsTitle.title_1")}
                          </h3>
                      </figure>
                      <figure
                          className="relative max-w-sm">
                          <img className="rounded-lg"
                               src="/decore_2.jpg"
                               alt="image description"/>
                          <h3 className='text-black font-medium'>
                              {t("aboutUsTitle.title_2")}
                          </h3>
                      </figure>
                      <figure
                          className="relative max-w-sm">
                          <img className="rounded-lg"
                               src="/decore_3.jpg"
                               alt="image description"/>
                          <h3 className='text-black font-medium'>
                              {t("aboutUsTitle.title_3")}
                          </h3>
                      </figure>
                      <figure
                          className="relative max-w-sm">
                          <img className="rounded-lg"
                               src="/decore_4.jpg"
                               alt="image description"/>
                          <h3 className='text-black font-medium'>
                              {t("aboutUsTitle.title_4")}
                          </h3>
                      </figure>
                      <figure
                          className="relative max-w-sm">
                          <img className="rounded-lg"
                               src="/decore_5.jpg"
                               alt="image description"/>
                          <h3 className='text-black font-medium'>
                              {t("aboutUsTitle.title_5")}
                          </h3>
                      </figure>
                      <figure
                          className="relative max-w-sm">
                          <img className="rounded-lg"
                               src="/decore_6.jpg"
                               alt="image description"/>
                          <h3 className='text-black font-medium'>
                              {t("aboutUsTitle.title_6")}
                          </h3>
                      </figure>
                  </div>
              </div>
              <div>
                  <h3 className='mt-20 mb-10 text-center font-semibold'>
                      {t("aboutUsTitle.askTitle")}
                  </h3>
                  {!showForm && (
                      <div className='text-center'>
                          <button
                              onClick={() => setShowForm(!showForm)}
                              className='tracking-widest w-fit py-4 px-6 bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                          >
                              {t("leaveRequest")}
                          </button>
                      </div>
                  )}
                  {showForm && (<RequestForm />)}
              </div>
          </div>
        </div>
    );
};

export default AboutUs;