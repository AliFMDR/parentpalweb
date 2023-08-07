import { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Card = ({ id, imageSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <img src={imageSrc} alt="" className="mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-5">{description}</p>
      <Link to={`/card/${id}`} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Detail Card
      </Link>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
const CardContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Ini adalah konten untuk Card 1.",
      category: "category1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Ini adalah konten untuk Card 2.",
      category: "category2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Ini adalah konten untuk Card 3.",
      category: "category1",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Ini adalah konten untuk Card 4.",
      category: "category2",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Ini adalah konten untuk Card 5.",
      category: "category1",
    },
  ];

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    filterCards(searchTerm, activeFilter);
  };

  const filterCards = (searchTerm, category) => {
    let filteredCards = [];

    if (category === "all") {
      filteredCards = cards.filter((card) => {
        const cardTitle = card.title.toLowerCase();
        return cardTitle.includes(searchTerm.toLowerCase());
      });
    } else {
      filteredCards = cards.filter((card) => card.category === category && card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredCards(filteredCards);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    filterCards(searchTerm, category);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <input type="text" placeholder="Cari card..." value={searchTerm} onChange={handleSearchChange} className="border border-gray-300 rounded-lg px-4 py-2 mr-2" />
        <button className={`bg-gray-200 text-gray-700 px-4 py-2 rounded ${activeFilter === "all" && "bg-blue-500 text-white"}`} onClick={() => handleFilterChange("all")}>
          All
        </button>
        <button className={`bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2 ${activeFilter === "category1" && "bg-blue-500 text-white"}`} onClick={() => handleFilterChange("category1")}>
          Category 1
        </button>
        <button className={`bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2 ${activeFilter === "category2" && "bg-blue-500 text-white"}`} onClick={() => handleFilterChange("category2")}>
          Category 2
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredCards.length > 0
          ? filteredCards.map((card) => <Card key={card.id} id={card.id} title={card.title} description={card.description} />)
          : cards.map((card) => <Card key={card.id} id={card.id} title={card.title} description={card.description} />)}
      </div>
    </div>
  );
};

export default CardContainer;
