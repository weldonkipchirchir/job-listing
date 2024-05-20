/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { Signup } from "../../components/user/SignUp";

function SIgnUp() {

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:1}}
      transition={{duration:1.3}}
      >
    <main className="padding min-md:h">
      <Signup/>
    </main>
    </motion.div>
  );
}

export default SIgnUp;
