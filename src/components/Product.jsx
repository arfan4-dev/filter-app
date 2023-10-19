import React, { useState } from 'react';
import {useSelector} from 'react-redux'

function Product() {
  const data=useSelector(state=>state.allProducts)  
console.log("data from store" , data)
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [rating,setRating]=useState('')
  // Filter the products based on the selected category
  const filteredProducts = data.filter((product) => {
    const matchCategory=selectedCategory==='all' || product.category===selectedCategory;
    const minPriceMatch=minPrice==='' || product.price >= parseFloat(minPrice);
    const maxPriceMatch=maxPrice==='' || product.price >= parseFloat(maxPrice)
    const ratingMatch=rating==='' || product.rating.rate ===parseFloat(rating) ;
    return matchCategory && minPriceMatch && maxPriceMatch && ratingMatch
  });

  
    const handleSelectChange = (e) => {
        setSelectedCategory(e.target.value);
    };

  return (
    <div>
        <div className="flex justify-center items-center">
            <div>
            <select
    className=" w-60 ml-4 mt-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
    value={selectedCategory}
    onChange={handleSelectChange}
  >
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
  </select>
            </div>

  
  <div className=" ">
        {/* <label class="text-gray-700">Min Price</label> */}
        <input
          type="number"
          placeholder="Min Price"
          className="block w-32 ml-4 mt-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="">
        {/* <label class="text-gray-700">Max Price</label> */}
        <input
          type="number"
          placeholder="Max Price"
          className="block w-32 ml-4 mt-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
            <select
    className=" w-60 ml-4 mt-2 bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
    value={rating}
    onChange={(e) => setRating(e.target.value)}
    >
               <option value="" disabled>Select Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
  </select>
            </div>
</div>



    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4">
      {
      
      filteredProducts.length==0? (<p className=" flex justify-center items-center text-gray-500">No items found</p>)
      :(filteredProducts.map((product) => (
        <div
          key={product.id}
          className="relative overflow-hidden"
        >
          <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 duration-300 ease-in">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="mt-2">
              <p className="text-gray-700 font-semibold text-lg truncate">
                {product.title}
              </p>
              <p className="text-gray-400 text-sm">
                {product.description.split(" ").slice(0, 10).join(" ")}...
              </p>
              <div className="mt-2">
                <p className="text-green-600 font-semibold">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      )))
      }
    </div>
    </div>

  );
}

export default Product;
