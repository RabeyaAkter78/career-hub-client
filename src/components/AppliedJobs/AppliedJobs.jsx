import React, { useState } from 'react';
import ApplyData from '../ApplyData/ApplyData';

const AppliedJobs = () => {

    const [filter, setFilter] = useState("");



    const data = localStorage.getItem("dataId");
    const getData = JSON.parse(data)
    console.log(getData);
    let getDatas = [];
    for (const id in getData) {
        getDatas.push(getData[id])

    }
    if (filter === 'Remote') {
        getDatas = getDatas.filter((data) => data.remote_or_onsite.includes('Remote'))
    }
    else if (filter === 'Onsite') {
        getDatas = getDatas.filter((data) => data.remote_or_onsite.includes('Onsite'))
    }
    else {
        getDatas = getDatas
    }
    return (
        <div>
            <div className='container mx-auto mt-16 flex justify-center items-center gap-4'>
                <button onClick={() => setFilter("Remote")} className='applyNow-btn'>Remote</button>

                <button onClick={() => setFilter("Onsite")} className='applyNow-btn'>On-site</button>

                <button onClick={() => setFilter("seeAll")} className='applyNow-btn'>see all</button>
            </div>

            <div   >
                {
                    getDatas.map(data => <ApplyData
                        key={data.id}
                        data={data}
                    ></ApplyData>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;