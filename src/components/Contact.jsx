import React from 'react'
import emailjs from '@emailjs/browser'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({ ...form, [name]:value})
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_76tuqjv',
      'template_wb6xo3f',
      {
        from_name : form.name,
        to_name   : 'Özge',
        from_email: form.email ,
        to_email: 'ozgekocabasoglu35@gmail.com',
        message: form.message
      },
      'ZBPdrVKZNtSz_pu-E'
    )
    .then(() => {
      setLoading(false)
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name:"",
        email:"",
        message:""
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })

  }

  return (
    <div className='xl:mt-3 xl:flex-row flex-col-reverse flex gap-5 overflow-hidden'>
      <motion.div
        variants={slideIn("left","tween",0.2,1)}
        className='flex-[0.75] bg-black-100 p-5 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        {/* <h3 className={styles.sectionHeadText}>Contact.</h3> */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-3 flex flex-col gap-3'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea 
              rows='5'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-full text-white shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Setting...' : 'Send'}
          </button>
        </form>

        <motion.div
          variants={slideIn("left","tween",0.2,1)}
          className='mt-6'
        >
          <button>
            Instagram
          </button>
          <button>
            Twitter
          </button>
          <button>
            Twitter
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
