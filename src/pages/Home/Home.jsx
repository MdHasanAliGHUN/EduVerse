import React from 'react';
import Banner from './Banner';
import PopularCourses from '../PopularCourses/PopularCourses';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <section>
            <Banner/>
            <PopularCourses/>
            <Categories/>
        </section>
    );
};

export default Home;