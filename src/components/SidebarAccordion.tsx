import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import RampChart from './charts/RampChart';

type IconType = {
    id: number;
    open: number;
}

const AccordionKeys = {
    WEATHER: 1,
    RAMP: 2,
};

function Icon({ id, open }: IconType) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const SidebarAccordion = () => {
    const [open, setOpen] = React.useState(AccordionKeys.RAMP);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === AccordionKeys.WEATHER} className='px-4 mb-4 bg-gray-900 rounded' icon={<Icon id={AccordionKeys.WEATHER} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(AccordionKeys.WEATHER)} className={`text-gray-400 font-normal ${open === AccordionKeys.WEATHER ? 'border-b-gray-500' : 'border-b-gray-900'}`}>DELAYED ROUTES</AccordionHeader>
                <AccordionBody>
                    <div className='divide-y divide-solid divide-gray-500'>
                        {/* route 1 */}
                        <div className='flex flex-col'>
                            <div className='flex justify-between pb-2' >
                                <div className='flex'>
                                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full mt-3"></div>
                                    <div className='text-gray-400 font-medium text-lg pl-2'>Monash Fwy Out</div>
                                </div>
                                <div className='text-gray-500 pt-1'>13km</div>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className='pt-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-gray-500 text-left'>Kings Way</div>
                                        <div className='text-gray-500 text-left'>EastLink</div>
                                    </div>
                                </div>
                                <div className='text-white  pt-3'><span className='font-medium text-lg'>45</span><span> min</span></div>
                            </div>
                        </div>
                        {/* route 2 */}
                        <div className='flex flex-col'>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full mt-3"></div>
                                    <div className='text-gray-400 font-medium text-lg pl-2'>Monash Fwy Out</div>
                                </div>
                                <div className='text-gray-500 pt-1'>15km</div>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className='pt-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-gray-500 text-left'>Kings Way</div>
                                        <div className='text-gray-500 text-left'>EastLink</div>
                                    </div>
                                </div>
                                <div className='text-white pt-3'><span className='font-medium text-lg'>28</span><span> min</span></div>
                            </div>
                        </div>
                        {/* route 3 */}
                        <div className='flex flex-col'>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full mt-3"></div>
                                    <div className='text-gray-400 font-medium text-lg pl-2'>Western Ring Rd</div>
                                </div>
                                <div className='text-gray-500 pt-1'>5km</div>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className='pt-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-gray-500 text-left'>WestGate Fwy</div>
                                        <div className='text-gray-500 text-left'>Western Fwy</div>
                                    </div>
                                </div>
                                <div className='text-white  pt-3'><span className='font-medium text-lg'>5</span><span> min</span></div>
                            </div>
                        </div>
                        {/* route 4 */}
                        <div className='flex flex-col'>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full mt-3"></div>
                                    <div className='text-gray-400 font-medium text-lg pl-2'>Eastern Fwy</div>
                                </div>
                                <div className='text-gray-500 pt-1'>15km</div>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <div className='flex'>
                                    <div className='pt-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-400">
                                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                    </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='text-gray-500 text-left'>Hoddle St</div>
                                        <div className='text-gray-500 text-left'>Springvale Rd</div>
                                    </div>
                                </div>
                                <div className='text-white  pt-3'><span className='font-medium text-lg'>25</span><span> min</span></div>
                            </div>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === AccordionKeys.RAMP} className='px-4 bg-gray-900 rounded' icon={<Icon id={AccordionKeys.RAMP} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(AccordionKeys.RAMP)} className={`text-gray-400 font-normal ${open === AccordionKeys.RAMP ? 'border-b-gray-500' : 'border-b-gray-900'}`}>
                    RAMP CHART
                </AccordionHeader>
                <AccordionBody>
                    <RampChart data-testid='ramp-chart-testid' />
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default SidebarAccordion;