import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  date,
  rating,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] mb-4'>{testimonial}</p>
      
      {rating && (
        <div className='mb-4'>
          <StarRating rating={rating} />
        </div>
      )}

      <div className='mt-7 flex flex-col gap-3'>
        <div className='flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <a 
              href="https://www.upwork.com/freelancers/briankarmo?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className='text-white font-medium text-[16px] hover:text-blue-500 transition-colors'
            >
              <span className='blue-text-gradient'>@</span> {name}
            </a>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>

        {date && (
          <div className="border-t border-gray-700 pt-3">
            <p className='text-secondary text-[12px]'>
              Date: {date}
            </p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      
      <div className="flex justify-center items-center pb-10">
        <a
          href="https://www.upwork.com/freelancers/briankarmo?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-tertiary rounded-xl hover:bg-[#14a800] transition-colors duration-300"
        >
          <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
            <path d="M357.2,296.9c-17,0-33-7.2-47.4-18.9l3.5-16.6l0.1-0.6c3.2-17.6,13.1-47.2,43.8-47.2c23,0,41.7,18.7,41.7,41.7
              C398.9,278.2,380.2,296.9,357.2,296.9z M357.2,171.4c-39.3,0-69.8,25.5-82.2,67.4c-18.9-28.4-33.3-62.4-41.7-91.2h-42.6v110.1
              c0,21.7-17.6,39.3-39.3,39.3s-39.3-17.6-39.3-39.3V147.6H69.5v110.1c0,45.4,37,82.4,82.4,82.4s82.4-37,82.4-82.4v-18.5
              c8.3,17.1,18.5,34.3,31,49.9l-26.3,123.8h43.5l19.1-89.7c16.7,10.7,35.8,17.6,55.6,17.6c46.8,0,84.9-38.1,84.9-84.9
              C442.1,209.4,404,171.4,357.2,171.4z"/>
          </svg>
          <span className="text-white font-medium">View My Upwork Profile</span>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
