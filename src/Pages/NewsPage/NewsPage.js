import React from 'react';
import AllNews from './AllNews';
import BreakingNews from './BreakingNews';
import NewsCategory from './NewsCategory';
import TestNews from './TestNews';
import TrendingNews from './TrendingNews';
import AdvBanner from '../HomePage/AdvBanner';
const NewsPage = () => {
    return (
        <div>
            <BreakingNews />
            <NewsCategory />
            <TrendingNews />
            <AdvBanner />
            {/* <TestNews /> */}
            <AllNews />
        </div>
    );
};

export default NewsPage;