// import React from 'react'
// import PodcastCard from '../components/PodcastCard/PodcastCard'
// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// // import PodcastCard from '../components/PodcastCard/PodcastCard';
// // const AllPodcasts = () => {
// //     const [Podcasts,setPodcasts] = useState();
// //     useEffect(()=>{
// //         const fetch = async()=>{
// //             const res = await axios.get("http://localhost:1000/api/v1/get-podcasts");
// //             setPodcasts(res.data.data);
// //         };
// //         fetch();

// //     },[]);

// //     console.log(Podcasts);
//   return (
//     <div>
//         {/* <div className='w-full px-4 lg:px-12 py-4 grid grid-cols-1 lg:grid-cols-4 gap-8' >
//             {/* {Podcasts && Podcasts.map((items,i)=>(
//                  <div key={i}> */}
                   
//                   {/* <PodcastCard  items ={items}/> */}
//                   {/* </div>))} */}
//                   <PodcastCard/>
//         </div> */}

//         <PodcastCard/>
//     </div>
//   )


// export default AllPodcasts


import React from 'react'
import PodcastCard from '../components/PodcastCard/PodcastCard'

const AllPodcasts = () => {
  return (
    <div> 

    <PodcastCard/>
    </div>
  )
}

export default AllPodcasts