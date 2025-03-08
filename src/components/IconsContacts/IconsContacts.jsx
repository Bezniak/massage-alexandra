import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {LuNotebookPen} from "react-icons/lu";
import {IoCallSharp} from "react-icons/io5";
import {SiInstagram} from "react-icons/si";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

const IconsContacts = () => {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
      <>
          <div
              className='md:h-80 xs:h-fit py-12 bg-[var(--light-blue)] flex flex-wrap justify-center items-center gap-16'>
              <a href="https://www.instagram.com/massage_aliaksandra/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className='flex flex-col items-center justify-center gap-3 cursor-pointer hover:text-red-500 transition-colors'
              >
                  <SiInstagram className='size-8'/>
                  <p className='uppercase font-medium'>
                      {t("joinUsInstagram")}
                  </p>
              </a>
              <button onClick={() => setIsModalOpen(true)}
                      className='flex flex-col items-center justify-center gap-3 hover:text-red-500 transition-colors'
              >
                  <LuNotebookPen className='size-8'/>
                  <p className='uppercase font-medium'>
                      {t("bookAppointment")}
                  </p>
              </button>
              <a href="tel:+375445859844"
                 className='flex flex-col items-center justify-center gap-3 cursor-pointer hover:text-red-500 transition-colors'
              >
                  <IoCallSharp className='size-8'/>
                  <p className='uppercase font-medium'>
                      {t("callUs")}
                  </p>
              </a>
          </div>
          {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      </>
    );
};

export default IconsContacts;
