import { Link } from 'react-router'
import type { ResumeData } from 'types'
import Card from './base/Card'
import ScoreCircle from './base/ScoreCircle'

interface Props {
  resume?: ResumeData
}



function ResumeCard({ resume }: Props) {
  const score = resume?.feedback?.overallScore || 0;
  return (
    <Card className='animate-in  h-full  fade-in duration-1000'>
      <Link to={`/resume/${resume?.id}`} className=''>
        <div className='flex justify-between'>
          <div className=''>
            <h2 className='!text-black font-bold ' >{resume?.companyName}</h2>
            <h3 className=' text-gray-500'>{resume?.jobTitle}</h3>
          </div>
          <div className='flex-shrink-0'>
            <ScoreCircle score={score} />
          </div>
        </div>


        <Card className='animate-in !p-0 border-4 mt-6 shadow-none border-gray-100 fade-in duration-1000 '>
          <div className='w-full h-full'>
            <img src={resume?.imagePath} alt="Resume Thumbnail" className='w-full h-[240px] max-sm:h-[200px] object-cover' />
          </div>
        </Card>
      </Link>

    </Card>

  )
}

export default ResumeCard