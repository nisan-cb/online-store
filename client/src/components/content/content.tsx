import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveCategory } from '../../store/view/viewSelectors';
import { ContentWrapper } from './content.css';

function Content() {
    const activeCategory = useSelector(getActiveCategory);

    return (
        <ContentWrapper>
            {activeCategory}
        </ContentWrapper>
    );
}

export default Content;
