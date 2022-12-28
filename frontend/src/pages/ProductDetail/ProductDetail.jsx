import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderSesion from "../../components/Header/HeaderSesion/HeaderSesion";
import ProductDetailContainer from "../../components/ProductDetailContainer/ProductDetailContainer/ProductDetailContainer";

export default function ProductDetailPage() {
    return (
        <>
            <HeaderSesion></HeaderSesion>
            <ProductDetailContainer></ProductDetailContainer>
        </>
    )
}