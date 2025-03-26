import React, { useMemo, useState } from "react";
import { useCart } from "../../hook/CartContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
export default function Cart() {
  const [show, setShow] = useState(false);
  const { addToCart, cart, removeFromCart, reduceFromCart, clearCart } =
    useCart();

  const handleShow = () => setShow(true);
  const handleClose = () => {
    clearCart(), setShow(false), alert(" cam on b da dat hang");
  };
  const totalItems = useMemo(
    () => cart.reduce((sum, product) => sum + product.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () =>
      cart.reduce((sum, product) => sum + product.gia * product.quantity, 0),
    [cart]
  );
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="position-relative"
      >
        cart
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
            {totalItems}
          </span>
        )}
      </Button>
      {/* <Modal></Modal> */}
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Your cart 5 items </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p className="text-center"> your cart is empty</p>
          ) : (
            <>
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="d-flex justify-content-center mb-3 border-bottom pb-2"
                >
                  <Image
                    src={product.hinhAnh}
                    alt={product.hinhAnh}
                    height={50}
                    width={50}
                    rounded
                    className="me-3"
                  ></Image>
                  <div className="flex-grow-1">
                    <h5>{product.tieuDe}</h5>
                    <p>{product.tacGia}</p>
                    <strong>${product.gia * product.quantity}</strong>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button onClick={() => reduceFromCart(product.id)}>
                      -
                    </Button>
                    <span className="mx-2">{product.quantity}</span>
                    <Button onClick={() => addToCart(product)}>+</Button>
                    <Button
                      className="mx-4 bg-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-between mt-3">
                <h5>total:</h5>
                <h5 className="text-success"> ${totalPrice}</h5>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            book
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
