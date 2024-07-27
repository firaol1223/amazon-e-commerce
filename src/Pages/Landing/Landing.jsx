import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from "../../components/Carousel/CarouselEffect";
// import "./App.css";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";

function Landing() {
    return (
        <Layout>
            <Carousel />
            <Category />
            <Product />
        </Layout>
    );
}

export default Landing
