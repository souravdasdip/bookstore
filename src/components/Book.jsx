import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartDetailActions } from "../redux/features/cartDetail";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [open, setopen] = useState(false);
  const handleAddToCart = () => {
    dispatch(cartDetailActions.addToCart(book));
  };

  const handleSingleBook = () => {
    setopen(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <div class="p-4 sm:w-1/1 md:w-1/2 lg:w-1/4">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          src={book?.formats["image/jpeg"]}
          class="lg:h-48 h-36 w-full object-cover"
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
          <div class="flex items-center flex-wrap cursor-pointer">
            <a
              class="mr-7 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              onClick={handleSingleBook}
            >
              View
            </a>
            <a
              onClick={handleAddToCart}
              class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
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
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setopen(false)}>
        <Box sx={style}>
          <div class="h-full">
            <img
              src={book?.formats["image/jpeg"]}
              class="h-2/3 w-2/3 object-cover"
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
                <a
                  class="mr-5 text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  onClick={handleSingleBook}
                >
                  View
                </a>
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
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Book;
