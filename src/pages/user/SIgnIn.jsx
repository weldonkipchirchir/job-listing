/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { SignIn } from "../../components/user/SignIn";
function SIgnIn() {

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:1}}
      transition={{duration:1.3}}
      >
    <main className="padding min-md:h">
      <SignIn/>
    </main>
    </motion.div>
  );
}

export default SIgnIn;
