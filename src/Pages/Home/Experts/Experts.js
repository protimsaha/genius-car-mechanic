import React from 'react';
import Expart from '../Expert/Expart';

const Experts = () => {
    const experts = [
        { 'id': 1, 'name': 'will smit', 'img': 'https://theweeklytrends.com/wp-content/uploads/2019/11/zz1-72.jpg' },
        { 'id': 2, 'name': 'will smit', 'img': 'https://i.pinimg.com/736x/5e/52/2d/5e522d1265b90634500842e88f17ec0d.jpg' },
        { 'id': 3, 'name': 'peter', 'img': 'https://aussiesworld.files.wordpress.com/2015/07/expert-car-mechanic.jpg' },
        { 'id': 4, 'name': 'Jasi', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEnFn9E7mfetnDk-NmJehby_Wi_rnKQbpxr_u1l5jW570uiWJqw9nkr3CwGdKGDzUUxA&usqp=CAU' },
        { 'id': 5, 'name': 'Mustabg', 'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx3GviYwpPw_cidFJzhXpUj-7WL0UQmvnM_9uLl5TlvizVedLaU4QTG7CvWtwgvcTfnc&usqp=CAU' },
        { 'id': 6, 'name': 'willalong', 'img': 'https://lirp.cdn-website.com/3d0852bfb8e44502aa7b20e48c21553f/dms3rep/multi/opt/561-480w.jpg' }
    ]
    return (
        <div className='container my-4'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Experts;