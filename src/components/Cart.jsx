import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDetailActions } from "../redux/features/cartDetail";

const Cart = ({ open__cart, setopen__cart }) => {
  const { cartDetail } = useSelector((state) => state.cartDetail);
  // const [total, settotal] = useState(0);

  const total = cartDetail.reduce(function (accumulator, currentValue) {
    console.log(currentValue);
    return accumulator + currentValue.id;
  }, 0);

  const handleClose = () => setopen__cart(false);
  const dispatch = useDispatch();

  const handleRemoveToCart = (book) => {
    dispatch(cartDetailActions.removeToCart(book));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <Modal open={open__cart} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h4" component="h2">
          Cart
        </Typography>
        <Typography variant="h6">Total: {total}tk</Typography>
        <div class="flex flex-wrap -m-4">
          {cartDetail?.length > 0 ? (
            <>
              {cartDetail?.map((book) => {
                return (
                  <div class="p-4 lg:w-full">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <img
                        class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src={book?.formats["image/jpeg"]}
                      />
                      <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-gray-900">
                          {book?.title}
                        </h2>
                        <h3 class="text-gray-500 mb-3">Price: {book?.id}tk</h3>
                        <p class="mb-4">
                          Authors:
                          {book?.authors?.map((author) => (
                            <span> {author?.name}</span>
                          ))}
                        </p>

                        <Button
                          variant="contained"
                          onClick={() => handleRemoveToCart(book)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Button
                style={{ marginLeft: 15, marginTop: 20 }}
                variant="contained"
              >
                Proceed to checkout
              </Button>
            </>
          ) : (
            <span className="p-5">No book added to cart!</span>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default Cart;
