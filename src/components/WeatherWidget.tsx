import imgSrc from '../assets/cloudy-icon.png';

const WeatherWidget = () => {
    return (
        <div className='text-gray-400 m-10'>
            <div className='flex justify-between mb-8'>
                <div className='flex-col text-left'>
                    <div className='text-xl pb-2'>Melbourne</div>
                    <div className='flex pl-4'>
                        <span className='text-white text-4xl'>32</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-2 h-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='pt-2' data-testid='date-and-time-testid'>Tue 16th  3:46 PM</div>
                </div>
                <img src={imgSrc} width="130" alt="No icon available" />
            </div>
            <div className='flex justify-between pt-2'>
                <div>Humidity</div>
                <div className='text-white text-xl'>78%</div>
            </div>
            <div className='flex justify-between pt-2'>
                <div>Chance oF Rain</div>
                <div className='text-white text-xl'>34%</div>
            </div>
            <div className='flex justify-between pt-2'>
                <div>Wind</div>
                <div><span className='text-white text-xl'>21 </span><span>kmh</span></div>
            </div>
            <div className='flex justify-between pt-2'>
                <div>Tomorrow</div>
                <div className='flex'>
                    <div className='text-white text-xl'>30</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-2 h-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WeatherWidget;