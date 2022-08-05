import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2">
      <motion.div
        className="p-3 border-solid border-black border-y-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei
          usmod
          {isOpen ? (
            <motion.p className="float-right font-bold">-</motion.p>
          ) : (
            <motion.p className="float-right font-bold">+</motion.p>
          )}
        </p>
      </motion.div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{
              opacity: 0,
              y: "-10%",
              transition: {
                duration: 0.5,
              },
            }}
            className="p-3"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
              ei usmod. Lorem ipsum dolor sit amet, consectetur adipi scing
              elit, sed do ei usmod. Lorem ipsum dolor sit amet, consectetur
              adipi scing elit, sed do ei usmod.
            </p>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}
