import React from "react";
import { useDispatch } from "react-redux";
import { cartDetailActions } from "../redux/features/cartDetail";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(cartDetailActions.addToCart(book));
  };

  return (
    <div class="p-4 md:w-1/4">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          src={book?.formats["image/jpeg"]}
          class="lg:h-48 md:h-36 w-full object-cover"
          alt="book"
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Price: {book?.id}tk
          </h2>
          <h1 class="title-font text-lg font-medium text-gray-900">
            {book?.title}
          </h1>
          <p class="leading-relaxed mb-3">
            Authors:
            {book?.authors?.map((author) => (
              <span> {author?.name}</span>
            ))}
          </p>
          <div
            class="flex items-center flex-wrap cursor-pointer"
            onClick={handleAddToCart}
          >
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Add to cart
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {book?.download_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
