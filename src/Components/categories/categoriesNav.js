import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../multi-lang/Language';
import NavBar from '../navBar';



const CategoriesNav = () => {
    return (
        <>
        <div className="categories__contener">
        <p><Text tid="categories" /></p>
        <div className="categories__nav">
        <Link to=""><Text tid="History" /></Link>
        <Link to=""><Text tid="philosophy" /></Link>
        <Link to=""><Text tid="ReligiousBooks" /></Link>
        <Link to=""><Text tid="Fiction" /></Link>
        <Link to=""><Text tid="technology" /></Link>
        </div>
        </div>
        <NavBar/>
        </>
    );
};


export default CategoriesNav;
