import React from 'react';
import { useSelector } from 'react-redux';
import { getActiveCategory } from '../../store/view/viewSelectors';
import Filter from './components/filter/filre';
import ItemsList from './components/itemsList/itemsList';
import { ContentWrapper } from './content.css';

function Content() {
    const activeCategory = useSelector(getActiveCategory);

    return (
        <ContentWrapper>
            <h3>
                {activeCategory}
            </h3>

            <section className='content'>
                <Filter />
                <ItemsList />
            </section>
        </ContentWrapper>
    );
}

export default Content;
