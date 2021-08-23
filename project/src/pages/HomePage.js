import React from "react";
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia neque at risus tempus, ac condimentum nulla facilisis. Nunc sed consectetur lorem. Vivamus condimentum at lacus et malesuada. Integer luctus lacus vitae quam varius, quis imperdiet neque cursus. Pellentesque eros dui, volutpat non commodo non, pulvinar ut arcu. Integer id dictum neque, nec ultrices lectus. Phasellus scelerisque ante ac metus fermentum egestas.",
    },
    {
        id: 2,
        title: "Czym jest paradoks Fermiego?",
        author: "Jan Kowalski",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia neque at risus tempus, ac condimentum nulla facilisis. Nunc sed consectetur lorem. Vivamus condimentum at lacus et malesuada. Integer luctus lacus vitae quam varius, quis imperdiet neque cursus. Pellentesque eros dui, volutpat non commodo non, pulvinar ut arcu. Integer id dictum neque, nec ultrices lectus. Phasellus scelerisque ante ac metus fermentum egestas.",
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "Ania Kwiatkowska",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia neque at risus tempus, ac condimentum nulla facilisis. Nunc sed consectetur lorem. Vivamus condimentum at lacus et malesuada. Integer luctus lacus vitae quam varius, quis imperdiet neque cursus. Pellentesque eros dui, volutpat non commodo non, pulvinar ut arcu. Integer id dictum neque, nec ultrices lectus. Phasellus scelerisque ante ac metus fermentum egestas.",
    },
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))

    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;