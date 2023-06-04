import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CircularProgress } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Book from "./components/Book";
import Cart from "./components/Cart";
import { booksDetailServices } from "./services";

function App() {
  useEffect(() => {
    getBokesData();
  }, []);

  const getBokesData = () => {
    booksDetailServices.fetchBooksDetails();
  };

  const { booksDetail } = useSelector((state) => state.booksDetail);
  const { cartDetail } = useSelector((state) => state.cartDetail);

  const [open__cart, setopen__cart] = useState(false);

  const handleOpenCart = () => {
    setopen__cart((prev) => !prev);
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Book Store
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Pick your master piece
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore an immersive world of books from the comfort of your own
              home. Our online book store brings a vast collection of genres and
              titles at your fingertips. Discover new releases, bestsellers, and
              hidden gems. With easy browsing, secure transactions, and doorstep
              delivery, indulge in the joy of reading anytime, anywhere.
            </p>
          </div>

          {/* books */}
          <div class="flex flex-wrap">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                {booksDetail ? (
                  booksDetail?.results?.map((book) => <Book book={book} />)
                ) : (
                  <span className="mx-auto">
                    <CircularProgress />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <section
          className=" fixed bottom-7 right-10 cursor-pointer"
          onClick={handleOpenCart}
        >
          <Badge badgeContent={cartDetail?.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </section>

        <Cart open__cart={open__cart} setopen__cart={setopen__cart} />
      </section>
    </>
  );
}

export default App;
