import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ExperienceAndProjectTemplate from '../../components/ExperienceAndProjectTemplate'
import { projects } from '../../resources/projects'

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex]=React.useState(0);
  return (
    <div>
        <SectionTitle title="Project"/>
        <div className='flex  py-10 gap-20 sm:flex-col'>
          <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-scroll sm:w-full'>
            {projects.map((project,index)=>(
              <div onClick={()=>(
                setSelectedItemIndex(index)
              )} className='cursor-pointer'>
                <h1 className={`text-xl px-5 py-3 ${selectedItemIndex===index ? 'text-tertiary border-l-4 border-tertiary -ml-[3px] bg-[#1a7f5a31]': 'text-white'}`}>{project.period}</h1>
              </div>
            ))}
          </div>
          <div className='flex gap-20 sm:flex-col '>
                <div className='border-5 border-white rounded'>
                    <img src={projects[selectedItemIndex].image}/>
                </div>
                <div className=' flex flex-col gap-5'>
                <h1 className='text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>
                <h1 className='text-tertiary text-l font-semibold'>{projects[selectedItemIndex].technologies}</h1>
                <p className='text-white'>{projects[selectedItemIndex].description}</p>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Projects